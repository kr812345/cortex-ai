// Uses native fetch to proxy to the AiLayer serverless API
export class AgentService {
    private static AI_LAYER_URL = process.env.AI_LAYER_URL || 'http://localhost:8000';

    static async invokeAgentStream(tenantId: string, query: string, userId: string) {
        const response = await fetch(`${this.AI_LAYER_URL}/api/v1/invoke`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Securely propagate tenant context downstream to the AiLayer
                'X-Tenant-Id': tenantId,
                'X-User-Id': userId
            },
            body: JSON.stringify({ query, tenantId, userId })
        });
        
        if (!response.ok || !response.body) {
            throw new Error(`Failed to invoke AI Layer: ${response.statusText}`);
        }
        
        // Returns the ReadableStream (SSE stream) to be piped directly to the frontend
        return response.body; 
    }
}
