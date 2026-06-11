import os
from contextlib import contextmanager
from typing import Iterator

from psycopg_pool import ConnectionPool
from langgraph.checkpoint.postgres import PostgresSaver
from psycopg import Connection
from AiLayer.config.settings import DATABASE_URL

# Default connection string matching docker-compose
DB_URI = DATABASE_URL

_pool = None

def get_connection_pool() -> ConnectionPool:
    global _pool
    if _pool is None:
        _pool = ConnectionPool(
            conninfo=DB_URI,
            max_size=20,
            kwargs={
                "autocommit": True,
                "prepare_threshold": 0,
            },
        )
    return _pool

@contextmanager
def get_checkpointer() -> Iterator[PostgresSaver]:
    """
    Context manager to yield a PostgresSaver memory checkpointer.
    Usage:
        with get_checkpointer() as memory:
            agent = create_deep_agent(..., checkpointer=memory)
    """
    pool = get_connection_pool()
    with PostgresSaver(pool) as checkpointer:
        # Ensures that the required tables (checkpoints, checkpoint_blobs, checkpoint_writes)
        # exist in the database.
        checkpointer.setup()
        yield checkpointer
