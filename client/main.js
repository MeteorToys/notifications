// Default to console.logging 
Note = function (text, data) {
	console.log(text);
	if (data) {
		console.log(data);
	}
}

// If toys are there, log it
if (Package["meteortoys:toykit"] && Package["meteortoys:toykit"].Note) {
	Note = Package["meteortoys:toykit"].Note;	
}
