import AlphabetIdentifierGenerator from "./src/index.mjs"

const generator = new AlphabetIdentifierGenerator()

// returns "a"
console.log(generator.insert("test_identifier_1"))
// returns "b"
console.log(generator.insert("test_identifier_2"))

// returns "a"
console.log(generator.lookup("test_identifier_1"))
