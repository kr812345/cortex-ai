import { Request, Response, NextFunction } from 'express';

// Simulated enum matching the Prisma schema for type safety
export enum Permission {
  READ_LEADS = 'READ_LEADS',
  WRITE_LEADS = 'WRITE_LEADS',
  MANAGE_USERS = 'MANAGE_USERS',
  EXECUTE_AGENT_TASKS = 'EXECUTE_AGENT_TASKS',
  MANAGE_CAMPAIGNS = 'MANAGE_CAMPAIGNS',
  READ_KNOWLEDGE = 'READ_KNOWLEDGE',
  WRITE_KNOWLEDGE = 'WRITE_KNOWLEDGE'
}

/**
 * Middleware to enforce RBAC based on permissions.
 * Expects `req.user` to be populated with roles and permissions by an earlier Auth middleware.
 */
export const requirePermission = (requiredPermission: Permission) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // Assuming req.user is injected by authentication middleware
    const user = (req as any).user;

    if (!user) {
      return res.status(401).json({ error: 'Unauthorized: No user found' });
    }

    if (!user.roles || !Array.isArray(user.roles)) {
      return res.status(403).json({ error: 'Forbidden: No roles assigned' });
    }

    // Check if any of the user's roles have the required permission
    const hasPermission = user.roles.some((role: any) => 
      role.permissions && role.permissions.includes(requiredPermission)
    );

    if (!hasPermission) {
      return res.status(403).json({ 
        error: `Forbidden: Requires ${requiredPermission} permission.` 
      });
    }

    next();
  };
};
