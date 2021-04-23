function TempGenerator(amount) {
		var i = 0;
		var min = 12;
		var max = 32;
    
    var collection = [];


		for(i=0; i < amount; i++) {
				collection.push(Math.ceil(max-min*Math.random()));
		}

		this.values = function() {
				return collection;
    }
}

module.exports = TempGenerator;

