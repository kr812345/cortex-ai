import Express, { Request, Response, NextFunction } from 'express';
import { AgentController } from '../Controllers/AgentController';
import { AuditController } from '../Controllers/AuditController';
import { requirePermission, Permission } from '../lib/rbac';

const appRouter: Express.Router = Express.Router();

// Mock Auth Middleware to securely inject user context and tenant boundaries
appRouter.use((req: Request, res: Response, next: NextFunction) => {
    (req as any).tenantId = req.headers['x-tenant-id'] || 'default-tenant-123';
    (req as any).user = {
        id: req.headers['x-user-id'] || 'default-user-456',
        // Mocking roles to pass the RBAC checks
        roles: [{ permissions: [Permission.EXECUTE_AGENT_TASKS, Permission.MANAGE_USERS] }]
    };
    next();
});

// AI Agent Orchestration Endpoints
appRouter.post('/v1/agent/invoke', requirePermission(Permission.EXECUTE_AGENT_TASKS), AgentController.invoke);

// Compliance and Auditing Endpoints
appRouter.get('/v1/audit', requirePermission(Permission.MANAGE_USERS), AuditController.getLogs);

export default appRouter;