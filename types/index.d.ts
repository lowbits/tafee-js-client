declare class Tafee {
    private readonly baseUrl;
    private readonly headers;
    private readonly slug;
    private readonly client;
    constructor(config: {
        slug: string;
    });
    getFeeForms(): Promise<Response>;
}
export default Tafee;
