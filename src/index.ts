type FeeFormResponse = Record<any, number>;

class Tafee {
    private readonly baseUrl = "https://tafee-service.onrender.com/api";
    private readonly headers: Headers;
    private readonly slug: string
    private readonly client: typeof fetch

    public constructor(config: { slug: string }) {
        this.slug = config.slug

        const headers = new Headers()

        headers.set('Content-Type', 'application/json')
        headers.set('Accept', 'application/json')
        headers.set('x-tenant-id', this.slug)

        this.headers = headers


        this.client = (input, args) => fetch(`${this.baseUrl}${input}`, {headers, ...args})
    }

    public async getFeeForms(): Promise<Response> {
        return await this.client('/fee-form')
    }
}

export default Tafee
