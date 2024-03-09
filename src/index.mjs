import convertToBase from "@anio-js-foundation/convert-to-base"

const alphabet = "abcdefghijklmnopqrstuvwxyz"

function AlphabetIdentifierGenerator() {
	let current_index = 0
	let map = {}

	this.insert = (value) => {
		value = value.toString()

		if (value in map) {
			throw new Error(`Duplicate entry '${value}'`)
		}

		let index = current_index

		map[value] = index

		++current_index

		return convertToBase(index, alphabet.length, alphabet)
	}

	this.lookup = (value) => {
		value = value.toString()

		if (!(value in map)) {
			throw new Error(`No such entry '${value}'`)
		}

		return convertToBase(map[value], alphabet.length, alphabet)
	}
}

export default AlphabetIdentifierGenerator
