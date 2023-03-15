import TafeeClient from '../'
console.log("🪄 Welcome")

const client = new TafeeClient({slug: 'foo'})

client.getFeeForms().then(r => {
    console.log("Got response", r)
})
