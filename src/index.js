const toJsonSchema = require('to-json-schema')

module.exports = [
    context => {
        const env = context.request.getEnvironmentVariable('JSON-SCHEMA')
        let body = context.response.getBody()
        if (body != null && body.length > 0 && env == true) {
            console.log(`[json-schema]  Already set`);
            let string = new TextDecoder("utf-8").decode(body)
            const schema = toJsonSchema(JSON.parse(string))
            let newBody = JSON.stringify(schema)
            context.response.setBody(newBody)
        } else {
            console.log(`[json-schema]  not set add   "JSON-SCHEMA": true to your env`)
        }
    }
]