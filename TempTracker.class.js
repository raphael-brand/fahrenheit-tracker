var TempTracker = function() { 
  var collection = [];
  var sortedCollection = [];
  var updatedCollection = [];


  this.track = function() {
		console.log('tracking ...');
    console.log(typeof this);
  }

  this.add = function(value) {
		if(Number(value) === NaN) {
				const error = new TypeError('value must be a number');
       console.error('value must be a number'); 
		}

		collection.push(value); 
		sortedCollection = collection.sort();
  }

  this.avg = function() {

    collection.forEach((index, value) => {

      
		}); 
  }

  this.highest = function() {
   return sortedCollection[sortedCollection.length - 1];
  }
  
  this.lowest = function() {
		return sortedCollection[0];
  }

}
module.exports = TempTracker;

