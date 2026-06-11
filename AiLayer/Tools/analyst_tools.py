import json
import psycopg
from .db_connection import get_db_connection

def execute_read_only_sql(query: str) -> str:
    """
    Executes a read-only SQL query against the Postgres database.
    Useful for data analytics and fetching metrics.
    """
    try:
        with get_db_connection() as conn:
            # Enforce read-only transaction mode
            conn.read_only = True
            
            with conn.cursor() as cur:
                cur.execute(query)
                
                # Fetch results
                columns = [desc[0] for desc in cur.description] if cur.description else []
                results = cur.fetchall()
                
                # Format output
                data = [dict(zip(columns, row)) for row in results]
                
            # Reset transaction state for the pool
            conn.read_only = False
            return json.dumps(data, indent=2, default=str)
            
    except psycopg.Error as e:
        return f"Database error occurred: {str(e)}"
    except Exception as e:
        return f"An unexpected error occurred: {str(e)}"
