import mongoose from "mongoose";

const schema = mongoose.Schema(
	{
		topic: String,
		userName: String,
		handle: String,
		image: String,
		time: String,
		content: String,
		liked: Boolean,
		replies: Number,
		retuits: Number,
		likes: Number,
		dislikes: Number,
		disliked: Boolean
	},
	{
		collection: 'tuits'
	}
	)

export default schema