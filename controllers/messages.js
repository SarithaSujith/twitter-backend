import message from '../models/messages.js';

const MessageController={
  getAllMessages,
   getMessageByID, 
   createMessage 
}
//CRUD operation for messages

async function  getAllMessages(request, response) {
	const messages = await message.find({});
	response.json(messages);
}
async function getMessageByID(request, response) {
	const messages = await message.find({ _id: request.params.id });
	response.json(messages);
}
//create message
async function createMessage(request, response) {
  console.log(request.body);
  const res = await message.create(request.body);
  response.send(res);
}
export default MessageController