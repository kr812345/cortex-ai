from deepagents import create_deep_agent
from AiLayer.SystemPrompts import MARKETING_AGENT_PROMPT

marketing_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[], # Add Marketing tools here
    system_prompt=MARKETING_AGENT_PROMPT
)
