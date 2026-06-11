from deepagents import create_deep_agent
from AiLayer.SystemPrompts import ADMIN_AGENT_PROMPT

admin_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[], # Add Admin tools here
    system_prompt=ADMIN_AGENT_PROMPT
)
