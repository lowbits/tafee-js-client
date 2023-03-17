import TafeeClient from '../'

console.log("🪄 Welcome")

const client = new TafeeClient({slug: 'foo'})


client.getFeeForms().then()
client.getFeeForms().then(r => {
    const [feeForms, feeFormsCount] = r
    console.log("Got response")
    console.log("FeeForms", feeForms)
    console.log("FeeForms count:", feeFormsCount)
})
