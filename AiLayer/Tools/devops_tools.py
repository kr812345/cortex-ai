from .github_tools import get_github_client

def trigger_github_action(repo_name: str, workflow_id: str, ref: str = "main", inputs: dict = None):
    """Trigger a GitHub Actions workflow."""
    try:
        g = get_github_client()
        repo = g.get_repo(repo_name)
        workflow = repo.get_workflow(workflow_id)
        success = workflow.create_dispatch(ref, inputs or {})
        return f"Successfully dispatched workflow {workflow_id} on {repo_name}." if success else "Failed to dispatch workflow."
    except Exception as e:
        return f"Error triggering workflow: {str(e)}"

def check_cloud_metrics(service: str):
    """Check high-level metrics for cloud infrastructure (mock implementation)."""
    # Real implementation would use boto3 (AWS) or google-cloud-monitoring (GCP).
    metrics = {
        "database_cpu_usage": "42%",
        "api_latency_ms": "120",
        "error_rate_5xx": "0.01%"
    }
    return f"Metrics for {service}: {metrics}"
