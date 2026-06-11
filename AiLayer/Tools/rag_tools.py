import os
import json
from langchain_google_genai import GoogleGenerativeAIEmbeddings
from .db_connection import get_db_connection

# Initialize embeddings model
# Ensure GOOGLE_API_KEY is set in your environment
embeddings = GoogleGenerativeAIEmbeddings(model="models/text-embedding-004")

def search_company_knowledge(query: str, tenant_id: int, limit: int = 5) -> str:
    """
    Search the company knowledge database for relevant context based on a user's query.
    Returns a JSON string of relevant documents.
    """
    try:
        # Generate embedding for the query
        query_embedding = embeddings.embed_query(query)
        
        with get_db_connection() as conn:
            # We use <=> for cosine distance in pgvector
            # Prisma wraps table names in double quotes
            sql = """
                SELECT id, title, content, 1 - (embedding <=> %s::vector) as similarity
                FROM "CompanyKnowledge"
                WHERE "tenantId" = %s
                ORDER BY embedding <=> %s::vector
                LIMIT %s
            """
            
            with conn.cursor() as cur:
                cur.execute(sql, (query_embedding, tenant_id, query_embedding, limit))
                results = cur.fetchall()
                
            docs = []
            for row in results:
                docs.append({
                    "id": row[0],
                    "title": row[1],
                    "content": row[2],
                    "similarity_score": round(row[3], 4) if row[3] else None
                })
                
            return json.dumps(docs, indent=2)
            
    except Exception as e:
        return f"Error searching knowledge base: {str(e)}"

def save_company_knowledge(title: str, content: str, tenant_id: int) -> str:
    """
    Save new knowledge into the company's database, automatically generating embeddings for searchability.
    """
    try:
        # Generate embedding for the content
        content_embedding = embeddings.embed_query(content)
        
        with get_db_connection() as conn:
            sql = """
                INSERT INTO "CompanyKnowledge" (title, content, embedding, "tenantId", "createdAt", "updatedAt")
                VALUES (%s, %s, %s::vector, %s, NOW(), NOW())
                RETURNING id
            """
            with conn.cursor() as cur:
                cur.execute(sql, (title, content, content_embedding, tenant_id))
                new_id = cur.fetchone()[0]
                
            return f"Successfully saved knowledge with ID: {new_id}"
            
    except Exception as e:
        return f"Error saving knowledge: {str(e)}"
