console.log('starting notes.js');

var addNote = (title,body) => {
	console.log('Adding note', title, body);
};

var getAll = () => {
	console.log('Getting all notes');
};

var readNote = (title) => {
	console.log("Title: ",title);
}

var removeNote = (title) => {
	console.log("Removing Title: ", title);
}

module.exports = {
	addNote,
	getAll,
	readNote,
	removeNote
};
