import posts from "./tuits.js";
let tuits = posts;

const currentUser = {
	"userName": "NASA",
	"handle": "@nasa",
	"image": "/images/nasa.png",
};

const templateTuit = {
	...currentUser,
	"topic": "Space",
	"time": "2h",
	"liked": false,
	"replies": 0,
	"retuits": 0,
	"likes": 0,
	"dislikes": 0,
	"disliked": false
}

const createTuit = (req, res) => {
	const newTuit = {
		...req.body,
		...templateTuit,
		"_id": (new Date()).getTime() + ''};
	// console.log(newTuit)
	// newTuit._id = (new Date()).getTime()+'';
	tuits.push(newTuit);
	res.json(newTuit);
}
const findTuits = (req, res) =>
	res.json(tuits);

const updateTuit = (req, res) => {
	const tuitdIdToUpdate = req.params.tid;
	const updates = req.body;
	const tuitIndex = tuits.findIndex(
		(t) => t._id === tuitdIdToUpdate)
	tuits[tuitIndex] =
		{...tuits[tuitIndex], ...updates};
	res.sendStatus(200);
}

const deleteTuit = (req, res) => {
	const tuitdIdToDelete = req.params['tid'];
	tuits = tuits.filter((t) =>
		t._id !== tuitdIdToDelete);
	res.sendStatus(200);
}

export default (app) => {
	app.post('/api/tuits', createTuit);
	app.get('/api/tuits', findTuits);
	app.put('/api/tuits/:tid', updateTuit);
	app.delete('/api/tuits/:tid', deleteTuit);
}