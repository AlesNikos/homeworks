function getCountNumber(start, end) {
	function two(n) {
	    for (var count = 0; n; n >>= 1)
	        count += n & 1;
        return count === 2;
	}
	for (var i = start, count = 0; i <= end; ++i)
	    count += two(i);
	return count || false;
}


module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
	task: getCountNumber
}