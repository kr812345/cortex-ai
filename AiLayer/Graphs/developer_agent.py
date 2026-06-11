from deepagents import create_deep_agent
from AiLayer.SystemPrompts import DEVELOPER_AGENT_PROMPT

# Placeholders for dev tools
def read_codebase(path: str):
    return "Dummy code"

developer_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[read_codebase],
    system_prompt=DEVELOPER_AGENT_PROMPT
)
