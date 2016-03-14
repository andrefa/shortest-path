(function(){

	var shortestPath = {
		findShortestPath : findShortestPath
	};

	module.exports = shortestPath;

	function findShortestPath(map, start, destiny) {
		var concludedPaths = [];
		innerFindShortestPath(map, start, destiny, [start], 0, concludedPaths);


		var minor = minorCost(concludedPaths);

		console.log(require('util').inspect(minor, { showHidden: true, depth: null }));

		return minor;
	}

	function innerFindShortestPath(map, start, end, visited, cost, concludedPaths) {
		if (sameNode(start, end)) {
			concludedPaths.push(pathResult(visited, cost));
		} else {
			findInnerPaths(map, start, end, visited, cost, concludedPaths);
		}
	}

	function sameNode(a, b) {
		return a == b;
	}

	function findInnerPaths(map, start, end, visited, cost, concludedPaths) {
		var possiblePaths = map[start];

		var possibilityCount = 0;
		for (var possibilityProperty in possiblePaths) {
			if (possiblePaths.hasOwnProperty(possibilityProperty)) {
				if (visited.indexOf(possibilityProperty) == -1) {

					possibilityCount++;
					var newVisited = visited.concat(possibilityProperty);
					var newCost = cost + Number(possiblePaths[possibilityProperty]);

					innerFindShortestPath(map, possibilityProperty, end, newVisited, newCost, concludedPaths);
				}
			}
		}

		if(!possibilityCount) {
			concludedPaths.push(pathResult(visited, Infinity));
		}
	}

	function pathResult(path, cost) {
		return {
			path : path,
			cost : cost
		};
	}

	function minorCost(paths) {
		var minorCost = Infinity;
		var minorPath = null;

		for (var index = 0; index < paths.length ;index ++) {
			if (paths[index].cost < minorCost) {
				minorPath = paths[index];
				minorCost = paths[index].cost;
			}
		}
		return minorPath;
	}

})()