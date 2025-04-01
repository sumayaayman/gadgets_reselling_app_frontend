export const callAPI = async (url, body = null, method = 'GET', headers = {}) => {
  try {
    const request = {
      method: method,
      headers: {
        'Content-Type': 'application/json', // Default to JSON for APIs
        ...headers, // Spread custom headers
      },
    };

    // Only add JSON-stringified body for methods that support a payload (e.g., POST, PUT, PATCH)
    if (body) {
      request.body = JSON.stringify(body);
    }

    const response = await fetch(url, request);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Assuming the response is JSON
    return data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error; // Rethrow to be handled elsewhere
  }
};

export const callImageAPI = async (url, body = null, method = 'POST') => {
  try {
    // FormData should not have 'Content-Type' manually set—it handles it automatically
    const response = await fetch(url, {
      method: method,
      body: body, // `body` should be a FormData instance for file uploads
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Assuming the response is JSON
    return data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error; // Rethrow to be handled elsewhere
  }
};
