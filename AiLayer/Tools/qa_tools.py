import subprocess
import os

def run_test_suite(path: str = "."):
    """Run the pytest test suite in the specified directory and return the output."""
    try:
        # Security Note: The QA Agent should ideally run tests inside the DockerSandbox 
        # to prevent malicious test code from escaping.
        result = subprocess.run(
            ["pytest", path],
            capture_output=True,
            text=True,
            timeout=120
        )
        return {
            "returncode": result.returncode,
            "stdout": result.stdout,
            "stderr": result.stderr
        }
    except subprocess.TimeoutExpired:
        return "Error: Test suite execution timed out."
    except Exception as e:
        return f"Error running tests: {str(e)}"
