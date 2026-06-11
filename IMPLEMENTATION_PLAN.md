# Cortex AI Enterprise Implementation Plan

This plan outlines the future tasks required to bring the multi-agent ecosystem from its current foundation to a fully production-ready, enterprise-grade state.

## Goal Description
Upgrade the current Cortex AI project roadmap to include enterprise-grade features such as Role-based access control (RBAC), Secret management, Tenant isolation, Policy enforcement, Approval workflows, Secure execution environments, Compliance logging, and Integration with internal APIs and knowledge bases.

## Phase 1: Core Enterprise Architecture & Security
Before expanding agent capabilities, we need to establish a secure foundation for an enterprise system.

- [ ] **Tenant Isolation**
  - Implement multi-tenancy in the database (e.g., add `tenantId` to Prisma models like `User`, `CompanyKnowledge`, `AgentTask`).
  - Ensure the API and AI layers enforce data boundaries between tenants.
- [ ] **Role-based Access Control (RBAC)**
  - Expand the existing `Role` and `User` models in Prisma to support fine-grained permissions.
  - Implement middleware in the Backend and AI Layer to restrict access to specific agents, tools, and endpoints based on user roles.
- [ ] **Secret Management**
  - Integrate a free, open-source secure vault (e.g., Infisical or dotenv-vault) to securely handle API keys, database credentials, and third-party tokens, moving away from local `.env` files for production.
- [ ] **Compliance Logging**
  - Implement an immutable audit log for all user actions, API calls, and agent trajectories to meet SOC2/HIPAA compliance requirements.

## Phase 2: Agent Tooling & Execution Environment
Empowering agents while maintaining strict security constraints.

- [ ] **Secure Execution Environments**
  - Run agent code execution (e.g., Developer Agent scripts) in isolated, ephemeral sandboxes (e.g., Docker containers or firecracker microVMs) to prevent system compromise.
- [ ] **Integration with Internal APIs & Knowledge Bases**
  - Enhance the RAG Agent to securely query internal sources like Confluence, Jira, or custom enterprise APIs.
  - Implement dynamic permission checks so agents only retrieve and use knowledge the calling user is authorized to see.
- [ ] **Developer Agent: GitHub Integration**
  - Implement `PyGithub` to allow the agent to read repositories, list issues, and create PRs securely.
- [ ] **Designer Agent: UI/UX Tools**
  - Integrate Figma API to allow the agent to extract design tokens and analyze layouts.
- [ ] **Sales Agent: CRM Integration**
  - Connect to a CRM (e.g., Salesforce, HubSpot) so the agent can read, score, and update leads.
- [ ] **Marketing Agent: Content Tools**
  - Provide tools to draft, schedule, and publish social media/blog content, and analyze SEO metrics.
- [ ] **QA Agent: Testing Framework**
  - Give the agent the ability to run unit/integration tests and read the test output logs natively.
- [ ] **DevOps/Admin Agents: Infrastructure Tools**
  - Hook into CI/CD pipelines and cloud provider metrics for system monitoring.

## Phase 3: AI Orchestration & Governance
Ensuring the multi-agent system behaves predictably and safely.

- [ ] **Policy Enforcement**
  - Build a centralized policy engine (e.g., OPA - Open Policy Agent) to validate agent actions before they are executed.
- [ ] **Approval Workflows**
  - Implement a "Human-in-the-Loop" mechanism. High-risk actions (e.g., publishing social media, approving PRs, executing production DB scripts) should pause agent execution and notify an admin for approval.
- [ ] **Build the AI API Layer**
  - Flesh out the `AiLayer/API/` directory (e.g., using FastAPI) to expose an endpoint for `master_agent.invoke()`.
- [ ] **Implement Streaming**
  - Ensure the API supports streaming responses so the frontend can display the agent's thought process and subagent routing in real time.

## Phase 4: Frontend Integration & Operations
Connecting the intelligence to the user interface and deploying safely.

- [ ] **Chat UI Implementation**
  - Build the chat interface in the frontend Next.js codebase to interact with the Master Agent.
- [ ] **Agent Status Indicators & Approvals**
  - Build UI components that show the user exactly which subagent is currently working on the task.
  - Add an Admin/Manager Dashboard UI to review, approve, or reject pending high-risk agent actions.
- [ ] **Data Visualization Support**
  - Ensure the frontend can render markdown tables, Mermaid diagrams, or charts when the Data Analyst returns SQL query results.
- [ ] **Containerization & Deployment**
  - Write Dockerfiles for the AI Layer (Python) and the Backend (TypeScript).
- [ ] **Database Migrations**
  - Finalize and deploy the Prisma `pgvector` schemas to the production Postgres instance.

## User Review Required
> [!IMPORTANT]
> Please review the structural changes to the plan. Adding multi-tenancy and RBAC might require significant refactoring of the Prisma schema. We will need to decide whether to use a single database schema with `tenantId` columns (row-level security), or separate database schemas/instances per tenant.

## Open Questions
> [!WARNING]
> - What Secret Manager provider (AWS, GCP, Azure, or HashiCorp Vault) should we default to for this enterprise setup?
> - For the Human-in-the-Loop approval workflows, should we send notifications via Email/Slack, or strictly handle it within the Next.js web UI?
