import { prisma } from '../lib/prisma';

export class AuditLogService {
    /**
     * Write an immutable audit log entry for SOC2/HIPAA compliance.
     */
    static async logAction(tenantId: string, userId: string, action: string, metadata?: any) {
        return prisma.auditLog.create({
            data: {
                tenantId,
                userId,
                action,
                metadata: metadata || {}
            }
        });
    }

    /**
     * Retrieve the recent audit logs strictly scoped by tenantId.
     */
    static async getLogsForTenant(tenantId: string, limit: number = 50) {
        return prisma.auditLog.findMany({
            where: { tenantId },
            orderBy: { createdAt: 'desc' },
            take: limit
        });
    }
}
