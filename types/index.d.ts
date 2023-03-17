interface FeeForm {
    name: string;
}
type FeeFormsResponse = [FeeForm[], number];
declare class Tafee {
    private readonly headers;
    private readonly slug;
    private readonly client;
    constructor(config: {
        slug: string;
    });
    getFeeForms(): Promise<FeeFormsResponse>;
}
export default Tafee;
