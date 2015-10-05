Note = function (text, data) {
	console.log(text);
	if (data) {
		console.log(data);
	}
}

if (Package["meteortoys:toykit"].Note) {
	Note = Package["meteortoys:toykit"].Note;	
}