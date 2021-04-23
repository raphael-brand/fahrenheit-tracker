var TempTracker = require('./TempTracker.class.js');
var TempGenerator = require('./TempGenerator.class.js');

var tracker = new TempTracker();
tracker.track();

var generator = new TempGenerator(10);
console.log(generator.values());
