import os
from contextlib import contextmanager
from typing import Iterator
import psycopg
from psycopg_pool import ConnectionPool
from pgvector.psycopg import register_vector
from AiLayer.config.settings import DATABASE_URL

DB_URI = DATABASE_URL

_pool = None

def get_connection_pool() -> ConnectionPool:
    global _pool
    if _pool is None:
        def configure_connection(conn: psycopg.Connection):
            # Register pgvector extension types for this connection
            register_vector(conn)
            
        _pool = ConnectionPool(
            conninfo=DB_URI,
            max_size=20,
            kwargs={"autocommit": True},
            configure=configure_connection
        )
    return _pool

@contextmanager
def get_db_connection() -> Iterator[psycopg.Connection]:
    """Yields a database connection from the pool."""
    pool = get_connection_pool()
    with pool.connection() as conn:
        yield conn
