export const fetchJsonSameOrigin = <T>(
  url: string,
  init?: RequestInit,
): Promise<T> =>
  fetch(url, { credentials: 'same-origin', ...init }).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(
      `Unable to fetch ${url} ${response.status} ${response.statusText}`,
    );
  });

export const fetchJson = <T>(url: string) => fetchJsonSameOrigin<T>(url);

export const postJson = <T>(url: string, data: any) =>
  fetchJsonSameOrigin<T>(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
