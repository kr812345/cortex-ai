from deepagents import create_deep_agent
from AiLayer.SystemPrompts import DESIGNER_AGENT_PROMPT

designer_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[], # Add Figma tools here
    system_prompt=DESIGNER_AGENT_PROMPT
)
