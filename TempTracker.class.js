var TempTracker = function() { 
  var collection = [];
  var updatedCollection = [];


  this.track = function() {
		console.log('tracking ...');
   console.log(typeof this);
  }

  this.add = function(value) {
		if(Number(value) === NaN) throw new TypeError('value must be a number');
		if(collection.length == 0) {
				collection.push(value);
				return;
		}

    collection.forEach((index, value) => {

		}); 
  }

}
module.exports = TempTracker;

