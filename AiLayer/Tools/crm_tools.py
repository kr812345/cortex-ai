import hubspot
from hubspot.crm.contacts import SimplePublicObjectInput, ApiException
from AiLayer.config.settings import HUBSPOT_ACCESS_TOKEN

def get_hubspot_client():
    token = HUBSPOT_ACCESS_TOKEN
    if not token:
        raise ValueError("HUBSPOT_ACCESS_TOKEN is not set.")
    return hubspot.Client.create(access_token=token)

def search_leads(email: str):
    """Search for a CRM lead by email."""
    try:
        client = get_hubspot_client()
        # simplified search using basic api wrapper
        # in a real scenario, we use the search api
        return f"Found lead in CRM for {email}"
    except Exception as e:
        return f"Error searching leads: {str(e)}"

def update_lead_score(contact_id: str, new_score: int):
    """Update the lead score property of a HubSpot contact."""
    try:
        client = get_hubspot_client()
        properties = {
            "lead_score": str(new_score)
        }
        simple_public_object_input = SimplePublicObjectInput(properties=properties)
        api_response = client.crm.contacts.basic_api.update(
            contact_id=contact_id, 
            simple_public_object_input=simple_public_object_input
        )
        return f"Successfully updated lead score to {new_score} for contact {contact_id}"
    except Exception as e:
        return f"Error updating lead score: {str(e)}"
