var TempTracker = function() { 
	var collection = [];
	var sortedCollection = [];
	var highest, lowest, length, avg;



	this.track = function() {
		console.log(collection);
		console.info('sorted:', sortedCollection);
	}

	this.add = function(value) {

		if(typeof value != 'number') {
			const error = new TypeError('value must be a number');
			console.warn(error.stack);
			return;
		}

		collection.push(value);
		sortedCollection = new Set([...collection].sort());
		length = sortedCollection.size;

		avg = new Number(this.calc_avg());

		highest = new Number([...sortedCollection][length-1]);
		lowest = new Number([...sortedCollection][0]);
	}

	this.avg = function() {
		return avg;
	}

	this.calc_avg = function() {
		let collection = sortedCollection;
		let sum = 0;
		collection.forEach((value) => {
				sum += value;
				});
		return (sum/length);
	}

	this.highest = function() {
		return highest;
	}

	this.lowest = function() {
		return lowest;
	}

}
module.exports = TempTracker;

