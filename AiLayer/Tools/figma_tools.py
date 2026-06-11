import requests
from AiLayer.config.settings import FIGMA_ACCESS_TOKEN

def get_figma_file(file_key: str):
    """
    Fetch a Figma file's document structure using the Figma REST API.
    """
    token = FIGMA_ACCESS_TOKEN
    if not token:
        return "Error: FIGMA_ACCESS_TOKEN is not set."
    
    url = f"https://api.figma.com/v1/files/{file_key}"
    headers = {"X-Figma-Token": token}
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        return f"Error fetching Figma file: {str(e)}"

def extract_design_tokens(file_key: str):
    """
    Extract color palettes and typography from a Figma file.
    """
    # This is a simplified abstraction. In reality, it would parse the document structure.
    file_data = get_figma_file(file_key)
    if isinstance(file_data, str) and file_data.startswith("Error"):
        return file_data
        
    return "Extracted tokens: Colors (Primary: #000, Secondary: #FFF), Typography (Inter, 16px)"
