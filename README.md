# @anio-js-foundation/alphabet-identifier-generator

Generate a sequence of identifiers that are represented by alphabet characters.

```js
import AlphabetIdentifierGenerator from "@anio-js-foundation/alphabet-identifier-generator"

const generator = new AlphabetIdentifierGenerator()

// returns "a"
console.log(generator.insert("test_identifier_1"))
// returns "b"
console.log(generator.insert("test_identifier_2"))

// returns "a"
console.log(generator.lookup("test_identifier_1"))
```
