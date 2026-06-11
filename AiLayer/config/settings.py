import os
from dotenv import load_dotenv

# Load environment variables (supports standard .env as well as dotenv-vault)
load_dotenv()

# Database
DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://postgres:postgres@localhost:5432/cortexdb")

# API Keys and Integrations
GITHUB_TOKEN = os.getenv("GITHUB_TOKEN")
FIGMA_ACCESS_TOKEN = os.getenv("FIGMA_ACCESS_TOKEN")
HUBSPOT_ACCESS_TOKEN = os.getenv("HUBSPOT_ACCESS_TOKEN")

# Add additional centralized configurations here as needed
