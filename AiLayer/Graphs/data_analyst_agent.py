from deepagents import create_deep_agent
from AiLayer.SystemPrompts import DATA_ANALYST_AGENT_PROMPT
from AiLayer.Tools.analyst_tools import execute_read_only_sql

data_analyst_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[execute_read_only_sql],
    system_prompt=DATA_ANALYST_AGENT_PROMPT
)

if __name__ == "__main__":
    # Example execution
    response = data_analyst_agent.invoke({
        "messages": [{"role": "user", "content": 'Run a query to get the total number of users from the "User" table.'}]
    })
    print(response)
