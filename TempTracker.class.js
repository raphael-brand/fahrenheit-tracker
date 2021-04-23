var TempTracker = function() { 
  var collection = [];
  var sortedCollection = [];
  var updatedCollection = [];


  this.track = function() {
      console.log(collection);
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
      collection = [...collection];
      let length = collection.length;
      let sum = 0;
    collection.forEach((value) => {
          sum += value;
    });
    return (sum/length);
  }

  this.highest = function() {
   return sortedCollection[sortedCollection.length - 1];
  }
  
  this.lowest = function() {
		return sortedCollection[0];
  }

}
module.exports = TempTracker;

