# Use Python 3.10 slim image
FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install system dependencies required for pgvector and psycopg
RUN apt-get update \
    && apt-get install -y --no-install-recommends gcc libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application
COPY . .

# Set environment variables
ENV PYTHONPATH=/app

# Expose port for local/standalone execution
EXPOSE 8000

# Note: For AWS Lambda serverless deployment via container image, use:
# CMD ["AiLayer.API.server.handler"]

# Default command for standard container deployments (e.g. Google Cloud Run)
CMD ["uvicorn", "API.server:app", "--host", "0.0.0.0", "--port", "8000"]
