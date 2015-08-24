var startWarsName = require('./starwars-names.json');
var uniqueRandomArray = require('unique-random-array');

module.exports = {
	all: startWarsName,
	random: uniqueRandomArray(startWarsName)
};