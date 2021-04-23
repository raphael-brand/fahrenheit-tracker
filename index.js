var TempTracker = require('./TempTracker.class.js');
var TempGenerator = require('./TempGenerator.class.js');

var tracker = new TempTracker();
tracker.add(13);
tracker.add(10);
tracker.add(15);
tracker.add(1);
tracker.track();
console.log(tracker.avg());
console.log(tracker.lowest());
console.log(tracker.highest());
//var generator = new TempGenerator(10);
//console.log(generator.values());
