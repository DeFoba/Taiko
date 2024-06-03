export async function fetchWithTimeout(
  url: string,
  options: RequestInit = {},
  timeout: number = 5000,
): Promise<Response> {
  // Create a new promise that rejects after a timeout
  const timeoutPromise = new Promise<Response>((resolve, reject) => {
    const id = setTimeout(() => {
      clearTimeout(id);
      reject(new Error('The request timed out.'));
    }, timeout);
  });

  // Race the fetch request against the timeout
  return Promise.race([fetch(url, options), timeoutPromise]);
}

import { errorToast } from '$components/NotificationToast';

export async function fetchWithRetry(url: string, options: RequestInit = {}): Promise<Response> {
  try {
    const response = await fetch(url, options);
    if (response.status === 200) {
      return response;
    } else {
      errorToast({ title: 'Error', message: `Unexpected status code: ${response.status}` });
      throw new Error(`Unexpected status code: ${response.status}`);
    }
  } catch (error) {
    errorToast({ title: 'Error', message: 'Service Unavailable, please try again later' });
    throw new Error('Service Unavailable');
  }
}
