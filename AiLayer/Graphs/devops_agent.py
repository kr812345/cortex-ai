from deepagents import create_deep_agent
from AiLayer.SystemPrompts import DEVOPS_AGENT_PROMPT

# Placeholder for DevOps tools
def trigger_ci_cd_pipeline(repo: str):
    return f"Triggered pipeline for {repo}"

devops_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[trigger_ci_cd_pipeline],
    system_prompt=DEVOPS_AGENT_PROMPT
)
