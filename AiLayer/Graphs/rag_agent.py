from deepagents import create_deep_agent
from AiLayer.SystemPrompts import RAG_AGENT_PROMPT
from AiLayer.Tools.rag_tools import search_company_knowledge, save_company_knowledge

rag_agent = create_deep_agent(
    model="gemini-1.5-pro",
    tools=[search_company_knowledge, save_company_knowledge],
    system_prompt=RAG_AGENT_PROMPT
)

if __name__ == "__main__":
    # Example execution to test search/save tools
    response = rag_agent.invoke({
        "messages": [{"role": "user", "content": "What is our company's Q3 revenue? If not found, please note it."}]
    })
    print(response)