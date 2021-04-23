var TempTracker = function() { 
  var collection = [];
  var updatedCollection = [];

  this.track = this.track.bind(this);
  this.add = this.add.bind(this);


  this.track = function() {
		console.log('tracking ...');
   console.log(typeof this);
  }

  this.add = function(value) {
		if(collection.length == 0) {
				collection.push(value);
				return;
		}

    collection.forEach((index, value) => {

		}); 
  }

}
module.exports = TempTracker;

