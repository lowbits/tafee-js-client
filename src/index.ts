import Api from "./api";

interface FeeForm {
    name: string
}

type FeeFormsResponse = [FeeForm[], number];

class Tafee {
    private readonly slug: string
    private readonly client: Api

    public constructor(config: { slug: string }) {
        const baseUrl = "https://api.tax.integration.lowbits.de/api";
        this.slug = config.slug

        const headers = new Headers({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'x-tenant-id': this.slug
        })

        console.log("Headers in index", headers)
        this.client = new Api({baseUrl, headers});
    }

    public async getFeeForms() {
        return await this.client.get<FeeFormsResponse>('/fee-form')
    }
}

export default Tafee
