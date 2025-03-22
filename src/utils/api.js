export const callAPI = async  (url, body = null, headers = {}) => {
  try {
    const response = await fetch(url, {
      method: body ? 'POST' : 'GET', // Default to GET if no body is provided
      headers: {
        'Content-Type': 'application/json',
        ...headers, // Merge custom headers
      },
      body: body || null, // Stringify the body if it's provided
    });

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json(); // Assuming the response is JSON
    return data;
  } catch (error) {
    console.error('Error during fetch:', error);
    throw error; // Rethrow the error to be handled elsewhere
  }
}
