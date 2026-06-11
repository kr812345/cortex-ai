import { Request, Response } from 'express';
import { AuditLogService } from '../Services/AuditLogService';

export class AuditController {
    static async getLogs(req: Request, res: Response) {
        try {
            // Retrieve tenantId injected by Auth Middleware
            const tenantId = (req as any).tenantId || 'tenant-123';
            const limit = parseInt(req.query.limit as string) || 50;
            
            const logs = await AuditLogService.getLogsForTenant(tenantId, limit);
            
            res.json(logs);
        } catch (error: any) {
            res.status(500).json({ error: "Failed to retrieve audit logs." });
        }
    }
}
