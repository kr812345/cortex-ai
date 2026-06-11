import docker
import os
import tempfile
import uuid

class DockerSandbox:
    """
    A secure execution environment that runs arbitrary code in an isolated Docker container.
    This prevents system compromise by limiting resources and disabling networking.
    """
    def __init__(self, image="python:3.10-slim", timeout=30):
        self.image = image
        self.timeout = timeout
        try:
            self.client = docker.from_env()
        except Exception as e:
            self.client = None
            print(f"Failed to initialize Docker client: {e}")

    def run_code(self, code: str) -> str:
        """Executes arbitrary Python code in an isolated Docker container."""
        if not self.client:
            return "Error: Docker daemon is not available."

        # Create a temporary file to hold the code
        with tempfile.NamedTemporaryFile(mode='w', suffix='.py', delete=False) as f:
            f.write(code)
            temp_path = f.name

        container_name = f"sandbox_{uuid.uuid4().hex[:8]}"

        try:
            # Map the temp file into the container
            container = self.client.containers.run(
                self.image,
                command=f"python /sandbox/script.py",
                volumes={temp_path: {'bind': '/sandbox/script.py', 'mode': 'ro'}},
                name=container_name,
                working_dir="/sandbox",
                detach=True,
                network_disabled=True, # Security: prevent network access
                mem_limit="128m",      # Security: memory limit
                cpu_quota=50000        # Security: CPU limit
            )

            # Wait for execution to finish
            container.wait(timeout=self.timeout)
            logs = container.logs().decode('utf-8')
            return logs

        except Exception as e:
            return f"Execution error: {str(e)}"
        finally:
            # Cleanup container and temp file
            try:
                container = self.client.containers.get(container_name)
                container.remove(force=True)
            except Exception:
                pass
            if os.path.exists(temp_path):
                os.remove(temp_path)
