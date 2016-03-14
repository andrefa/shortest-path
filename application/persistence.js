(function(){

	var mongo = require('mongodb');

	var mapCollection = null;

	init();

	var persistence = {
		saveMap : saveMap,
		findMap : findMap
	}

	module.exports = persistence;

	function init() {
		var MongoClient = mongo.MongoClient;
		var url = 'mongodb://shortest-path-test:shortestpathtestisthebest@ds011429.mlab.com:11429/shortest-path-test';
		MongoClient.connect(url)
		.then(function(db) {
			mapCollection = db.collection('map');
		})
		.catch(function(err) {
			console.log(err);
		});
	}

	function saveMap(map) {
		mapCollection.insert(map);
	}

	function findMap(nameParam) {
		return mapCollection.findOne({ "name" : {"$eq": nameParam}});
	}

})()