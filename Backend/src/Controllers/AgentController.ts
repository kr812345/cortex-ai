import { Request, Response } from 'express';
import { AgentService } from '../Services/AgentService';
import { AuditLogService } from '../Services/AuditLogService';
import { Readable } from 'stream';

export class AgentController {
    static async invoke(req: Request, res: Response) {
        try {
            const { query } = req.body;
            // Retrieve tenantId and user injected by the Auth Middleware
            const tenantId = (req as any).tenantId || 'tenant-123';
            const userId = (req as any).user?.id || 'user-456';

            // Log action for immutable SOC2/HIPAA compliance
            await AuditLogService.logAction(tenantId, userId, 'INVOKE_AGENT', { query });

            // Call the Python AiLayer serverless API
            const aiStream = await AgentService.invokeAgentStream(tenantId, query, userId);
            
            // Set headers for Server-Sent Events (SSE) streaming
            res.setHeader('Content-Type', 'text/event-stream');
            res.setHeader('Cache-Control', 'no-cache');
            res.setHeader('Connection', 'keep-alive');

            // Pipe the web ReadableStream to the Node.js Express response
            const readable = Readable.fromWeb(aiStream as any);
            readable.pipe(res);
        } catch (error: any) {
            console.error('Agent invocation failed:', error);
            res.status(500).json({ error: "Agent invocation failed." });
        }
    }
}
