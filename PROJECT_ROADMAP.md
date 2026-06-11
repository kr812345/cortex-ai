# Cortex AI Project Roadmap

Below is a comprehensive checklist of future tasks required to bring the multi-agent ecosystem from its current foundation to a fully production-ready state.

## Phase 1: Completing Agent Tooling
We currently have fully functioning RAG and Data Analyst tools. Next, we need to empower the remaining agents.

- [ ] **Developer Agent: GitHub Integration**
  - Implement `PyGithub` to allow the agent to read repositories, list issues, and create PRs.
- [ ] **Designer Agent: UI/UX Tools**
  - Integrate Figma API to allow the agent to extract design tokens and analyze layouts.
- [ ] **Sales Agent: CRM Integration**
  - Connect to a CRM (e.g., Salesforce, HubSpot) so the agent can read, score, and update leads.
- [ ] **Marketing Agent: Content Tools**
  - Provide tools to draft, schedule, and publish social media/blog content, and analyze SEO metrics.
- [ ] **QA Agent: Testing Framework**
  - Give the agent the ability to run unit/integration tests and read the test output logs natively.
- [ ] **DevOps/Admin Agents: Infrastructure Tools**
  - Hook into CI/CD pipelines (e.g., GitHub Actions APIs) and cloud provider metrics for system monitoring.

## Phase 2: API & Backend Connectivity
The AI Layer needs to be securely exposed to your frontend application.

- [ ] **Build the AI API Layer**
  - Flesh out the `AiLayer/API/` directory (e.g., using FastAPI) to expose an endpoint for `master_agent.invoke()`.
- [ ] **Implement Streaming**
  - Ensure the API supports streaming responses so the frontend can display the agent's thought process and subagent routing in real time.
- [ ] **Secure the Endpoints**
  - Implement authentication/authorization so only verified internal users can trigger the agents.

## Phase 3: Frontend Integration
Connecting the intelligence to the user interface.

- [ ] **Chat UI Implementation**
  - Build the chat interface in the frontend codebase to interact with the Master Agent.
- [ ] **Agent Status Indicators**
  - Build UI components that show the user exactly which subagent (e.g., "Developer Agent", "Data Analyst") is currently working on the task.
- [ ] **Data Visualization Support**
  - Ensure the frontend can render markdown tables, Mermaid diagrams, or charts when the Data Analyst returns SQL query results.

## Phase 4: Deployment & Operations
- [ ] **Containerization**
  - Write Dockerfiles for the AI Layer (Python) and the Backend (TypeScript).
- [ ] **Database Migrations**
  - Finalize and deploy the Prisma `pgvector` schemas to the production Postgres instance.
- [ ] **Monitoring & Logging**
  - Setup LangSmith (or equivalent) to monitor agent trajectories, tool usage, and LLM costs.
