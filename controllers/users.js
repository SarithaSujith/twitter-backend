import user from '../models/user.js';

const UserController = {
	getAllUsers,
	getUserByID,
  createUser
};

//CRUD operations on the User model. Try: GET, POST, PUT, DELETE, then send a status of success and the json of the entries matching the conditions. Catch send a status of error and the error message.For each operation that is performed on the route users/:id, we need to extract the id from the request parameter

async function getAllUsers(request, response) {
	const users = await user.find({});
	response.json(users);
}

async function getUserByID(request, response) {
	const users = await user.find({ _id: request.params.id });
	response.json(users);
}
//create user
async function createUser(request, response) {
  console.log(request.body);
  const res = await user.create(request.body);
  response.send(res);
}
export default UserController;
