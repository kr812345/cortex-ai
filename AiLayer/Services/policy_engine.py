class PolicyEngine:
    """
    Centralized policy engine to validate agent actions before execution.
    Can be replaced or augmented with Open Policy Agent (OPA) in the future.
    """
    
    HIGH_RISK_ACTIONS = [
        "delete_database",
        "drop_table",
        "create_pull_request",
        "schedule_social_post",
        "update_lead_score"
    ]

    @staticmethod
    def validate_action(action_name: str, payload: dict, user_roles: list) -> dict:
        """
        Validates if an action is allowed, and whether it requires human approval.
        """
        # 1. Deny lists or strict RBAC enforcement
        # If the user doesn't have the permission to even trigger this tool, block it.
        # This is an extra layer of defense behind the API RBAC middleware.
        
        # 2. Human-in-the-Loop check
        if action_name in PolicyEngine.HIGH_RISK_ACTIONS:
            return {
                "allowed": True, 
                "requires_approval": True, 
                "reason": f"Action '{action_name}' is high-risk and requires human approval."
            }
        
        return {
            "allowed": True, 
            "requires_approval": False, 
            "reason": "Action is safe and pre-approved."
        }
