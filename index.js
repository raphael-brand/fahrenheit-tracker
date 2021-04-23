var TempTracker = require('./TempTracker.class.js');
var TempGenerator = require('./TempGenerator.class.js');

var tracker = new TempTracker();
tracker.add(5);
tracker.add(10);
//tracker.track();
console.log(tracker.lowest());
console.log(tracker.highest());
var generator = new TempGenerator(10);
console.log(generator.values());
