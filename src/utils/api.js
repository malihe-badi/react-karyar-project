
const baseUrl = 'https://kaaryar-ecom.liara.run/v1/';

export const api = (endpoint) => {
    return fetch(`${baseUrl}${endpoint}`)
        .then(response => response.json())
        .catch(error => console.error("Error:", error));
};
    
