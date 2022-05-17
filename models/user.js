import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	email: {
		type: String,
	},
	avatar: {
		type: String,
		required: true,
		default:
			'https://th.bing.com/th/id/OIP.sJhiNQZoqAiaGJusJ_M37wHaHa?pid=ImgDet&rs=1',
	},
});
const user = mongoose.model('user', userSchema);

export default user;
