import mongoose from 'mongoose';
const { Schema } = mongoose;

const messageSchema = new Schema({
  message: { 
    type: String, 
    required: true 
  },
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "user",
  },
},
{ timestamps: true }
);
messageSchema.pre("find", function () {
  this.populate("userID");
});

const message = mongoose.model('message', messageSchema);

export default message;

