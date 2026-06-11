from deepagents import create_deep_agent
from AiLayer.SystemPrompts import QA_AGENT_PROMPT

# Placeholder for DB access tools for QA
def fetch_test_data(query: str):
    return "Dummy test data from DB with masked PII"

qa_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[fetch_test_data],
    system_prompt=QA_AGENT_PROMPT
)
