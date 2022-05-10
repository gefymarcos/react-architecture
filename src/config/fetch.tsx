/* eslint-disable no-throw-literal */
type RequestProps = Pick<
  RequestInit,
  "method" | "mode" | "credentials" | "body" | "headers"
> & { url: string };

export type RequestError<ErrorBodyType = string> = Pick<
  Response,
  "status" | "statusText"
> & {
  body: ErrorBodyType;
};

export const masterRequestProps: Pick<
  RequestInit,
  "mode" | "credentials" | "headers"
> = {
  mode: "cors",
  credentials: "include",
  headers: {
    Accept: "application/json"
  }
};

async function request<T>({
  method,
  mode,
  credentials,
  url,
  body,
  headers
}: RequestProps): Promise<T> {
  const requestInit: RequestInit = {
    method,
    mode,
    credentials,
    headers: {
      "content-type": "application/json;charset=UTF-8",
      ...headers
    },
    body
  };

  async function parseResponse(response: Response) {
    const textContent = await response.text();

    try {
      return JSON.parse(textContent);
    } catch (error) {
      return textContent.toLowerCase();
    }
  }

  const request = await window.fetch(url, requestInit);
  const response = await parseResponse(request);

  if (request.ok) {
    return response as Promise<T>;
  }

  const requestError: RequestError = {
    status: request.status,
    statusText: request.statusText.toLowerCase(),
    body: response
  };

  throw requestError;
}

function get<T>({ ...params }: Omit<RequestProps, "method">): Promise<T> {
  return request({ method: "GET", ...params });
}

function post<T>({ ...params }: Omit<RequestProps, "method">): Promise<T> {
  return request({ method: "POST", ...params });
}

export { get, post };
