interface ApiConfig {
    baseUrl: string;
    fetch?: typeof fetch;
    headers: Headers;
}
declare class api {
    private readonly headers;
    private readonly fetch;
    private baseUrl;
    constructor($config: ApiConfig);
    get<T>(url: string): Promise<T>;
}
export default api;
