export const callAPI = async  (url, body = null, method = 'GET', headers = {}) => {
  try {
    const request = {
      method: method,
      headers:  {
        'Content-Type': 'application/json',
        ...headers,
      },
    }
    if(body) {
      request.body = body ? JSON.stringify(body) : null;
    }
    const response = await fetch(url, request);

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


export const callImageAPI = async  (url, body = null, method = 'POST') => {
  try {
    const response = await fetch(url, {
      method: method,
      body: body,
    });

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
