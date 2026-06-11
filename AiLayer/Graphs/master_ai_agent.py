from deepagents import create_deep_agent
from AiLayer.SystemPrompts import MASTER_AGENT_PROMPT
from AiLayer.Memory import get_checkpointer

# Import all specialized agents
from AiLayer.Graphs.rag_agent import rag_agent
from AiLayer.Graphs.data_analyst_agent import data_analyst_agent
from AiLayer.Graphs.developer_agent import developer_agent
from AiLayer.Graphs.designer_agent import designer_agent
from AiLayer.Graphs.sales_agent import sales_agent
from AiLayer.Graphs.marketing_agent import marketing_agent
from AiLayer.Graphs.admin_agent import admin_agent
from AiLayer.Graphs.qa_agent import qa_agent
from AiLayer.Graphs.devops_agent import devops_agent

if __name__ == "__main__":
    with get_checkpointer() as memory:
        master_agent = create_deep_agent(
            model="gemini-1.5-pro",
            system_prompt=MASTER_AGENT_PROMPT,
            checkpointer=memory,
            subagents=[
                {
                    "name": "rag_agent",
                    "description": "Searches and saves company knowledge in the vector database. Use for general queries about company data or documents.",
                    "runnable": rag_agent
                },
                {
                    "name": "data_analyst_agent",
                    "description": "Executes read-only SQL queries against the database to generate analytical metrics and reports.",
                    "runnable": data_analyst_agent
                },
                {
                    "name": "developer_agent",
                    "description": "Handles codebase reading/writing and Github interactions. Use for software engineering tasks.",
                    "runnable": developer_agent
                },
                {
                    "name": "designer_agent",
                    "description": "Handles UI/UX analysis and Figma integrations.",
                    "runnable": designer_agent
                },
                {
                    "name": "sales_agent",
                    "description": "Handles CRM integrations, lead evaluation, and sales pipelines.",
                    "runnable": sales_agent
                },
                {
                    "name": "marketing_agent",
                    "description": "Handles SEO optimization, content generation, and marketing campaign strategy.",
                    "runnable": marketing_agent
                },
                {
                    "name": "admin_agent",
                    "description": "Manages system configurations, health metrics, and user permissions.",
                    "runnable": admin_agent
                },
                {
                    "name": "qa_agent",
                    "description": "Writes and executes test cases, validating code against company test data.",
                    "runnable": qa_agent
                },
                {
                    "name": "devops_agent",
                    "description": "Handles CI/CD, infrastructure, and deployment pipelines.",
                    "runnable": devops_agent
                }
            ]
        )
        
        # Example execution to test orchestration
        print("Testing Master Orchestrator Routing...")
        response = master_agent.invoke(
            {"messages": [{"role": "user", "content": 'Run a query to get the total number of users from the "User" table.'}]},
            config={"configurable": {"thread_id": "orchestrator-test-1"}}
        )
        print(response)