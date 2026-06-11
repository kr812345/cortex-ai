from deepagents import create_deep_agent
from AiLayer.SystemPrompts import SALES_AGENT_PROMPT

sales_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[], # Add CRM tools here
    system_prompt=SALES_AGENT_PROMPT
)
