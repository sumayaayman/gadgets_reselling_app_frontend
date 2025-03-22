export const callAPI = async  (url, body = null, method = 'GET', headers = {}) => {
  try {
    const response = await fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: body ? JSON.stringify(body) : null,
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
