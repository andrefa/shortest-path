(function(){

	var express = require('express');
	var ShortestPath = require('./../application/shortestPath');
	var persistence = require('./../application/persistence');

	var router = express.Router();


	router.post('/', function(req, res, next) {
		persistence.saveMap(req.body);
		res.send();
	});

	router.post('/shortestPath', function(req, res, next) {
		var config = req.body;
		persistence.findMap(config.name)
		.then(function(item) {
			var shortestPath = calculateShortestPath(item, config);
			res.send(buildResponse(shortestPath, config));
		})
		.catch(function(err) {
			console.log(err);
		});
	});

	function calculateShortestPath(map, config) {
		return ShortestPath.findShortestPath(map, config.source, config.destiny);
	};

	function buildResponse(shortestPath, config) {
		if (shortestPath == null) {
			return {
				path : "unreacheable",
				cost : -1
			}
		}

		return {
			path: shortestPath.path,
			cost: calculatePrice(shortestPath, config)
		}
	}

	function calculatePrice(shortestPath, config) {
		return (shortestPath.cost * config.price / config.autonomy).toFixed(2);
	}

	module.exports = router;

})()