interface ApiConfig {
	baseUrl: string
	fetch?: typeof fetch
	headers: Headers
}

class api {
	private readonly headers: Headers
	private readonly fetch: typeof fetch
	private readonly baseUrl: string

	constructor($config: ApiConfig) {
		this.baseUrl = $config.baseUrl
		this.headers = $config.headers || new Headers()
		this.fetch = (...args) =>
			$config.fetch ? $config.fetch(...args) : fetch(...args)
	}

	public async get<T>(url: string): Promise<T> {
		try {
			const response = await this.fetch(`${this.baseUrl}${url}`, {
				headers: this.headers,
			})

			if (!response.ok) {
				throw new Error(response.statusText)
			}

			return (await response.json()) as T
		} catch (error) {
			throw new Error('Could not fetch...')
		}
	}
}

export default api
