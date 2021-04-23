var TempTracker = function() { 
  var collection = [];
  var updatedCollection = [];

  this.track = function() {
		console.log('tracking ...');
   console.log(typeof this);
  }

  this.track = this.track.bind(this);

}
module.exports = TempTracker;

