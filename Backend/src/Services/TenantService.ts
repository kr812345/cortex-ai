import { prisma } from '../lib/prisma';

export class TenantService {
    static async getTenant(tenantId: string) {
        return prisma.tenant.findUnique({
            where: { id: tenantId }
        });
    }

    static async verifyUserAccess(tenantId: string, userId: string) {
        // Verify the user actually belongs to this tenant
        const user = await prisma.user.findFirst({
            where: {
                id: userId,
                tenantId: tenantId
            }
        });
        return !!user;
    }
}
