# Cortex AI

Cortex AI is an enterprise-grade Intelligence Layer and Orchestration Engine. It bridges complex Large Language Model (LLM) workflows with robust backend infrastructure, providing a scalable API for integrating AI agents into internal tools and B2B SaaS platforms.

## Architecture

Cortex AI consists of a decoupled architecture optimized for serverless deployments and robust AI execution:

1. **AiLayer (Python/FastAPI)**:
   - **Engine**: Stateful orchestration using `LangGraph` and `postgres_checkpointer`.
   - **Tools**: GitHub, Figma, HubSpot, SEO/Marketing, QA (Pytest), and DevOps capabilities.
   - **Serverless Ready**: Wrapped with `Mangum` for AWS Lambda / Vercel deployment.
   
2. **Backend API (Node.js/Express)**:
   - **Database**: PostgreSQL with Prisma ORM.
   - **Security**: Tenant-isolated data layer, Role-Based Access Control (RBAC), and immutable SOC2/HIPAA Audit Logging.
   - **Streaming**: Native Server-Sent Events (SSE) proxying from the AiLayer for real-time agent thought streaming.

3. **Frontend (Next.js)**:
   - *(Coming Soon)* React-based Chat UI, Admin Approvals Dashboard, and data visualization.

## Getting Started

### Prerequisites
- Node.js (v18+)
- Python (3.11+)
- PostgreSQL Database

### Running Locally

1. **Start the AiLayer**:
   ```bash
   cd AiLayer
   python -m venv venv
   source venv/bin/activate
   pip install -r requirements.txt
   uvicorn API.server:app --port 8000
   ```

2. **Start the Backend**:
   ```bash
   cd Backend
   npm install
   npm run dev
   ```

## Development Status
This repository serves as the Minimum Viable Architecture (MVA) for enterprise agentic integration. Refer to our internal roadmap for scaling targets including SSO, Rate Limiting, and Vector Database integration.
