
from github import Github
from github.GithubException import GithubException
from AiLayer.config.settings import GITHUB_TOKEN

# Initialize GitHub client using centralized token
def get_github_client():
    token = GITHUB_TOKEN
    if not token:
        raise ValueError("GITHUB_TOKEN is not set.")
    return Github(token)

def search_repositories(query: str, limit: int = 5):
    """Search for public or accessible repositories on GitHub."""
    try:
        g = get_github_client()
        repositories = g.search_repositories(query=query)
        results = []
        for repo in repositories[:limit]:
            results.append({
                "name": repo.full_name,
                "description": repo.description,
                "url": repo.html_url,
                "stars": repo.stargazers_count
            })
        return results
    except Exception as e:
        return f"Error searching repositories: {str(e)}"

def list_repository_issues(repo_name: str, state: str = "open", limit: int = 10):
    """List issues for a specific repository (e.g., 'owner/repo')."""
    try:
        g = get_github_client()
        repo = g.get_repo(repo_name)
        issues = repo.get_issues(state=state)
        results = []
        for issue in issues[:limit]:
            results.append({
                "number": issue.number,
                "title": issue.title,
                "state": issue.state,
                "url": issue.html_url,
                "creator": issue.user.login
            })
        return results
    except Exception as e:
        return f"Error listing issues: {str(e)}"

def create_pull_request(repo_name: str, title: str, body: str, head_branch: str, base_branch: str = "main"):
    """Create a pull request in a specific repository."""
    try:
        g = get_github_client()
        repo = g.get_repo(repo_name)
        pr = repo.create_pull(title=title, body=body, head=head_branch, base=base_branch)
        return {"pr_number": pr.number, "url": pr.html_url}
    except Exception as e:
        return f"Error creating pull request: {str(e)}"
