import  mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['admin', 'manager'],
    required: true
  },
  avatarUrl: String,
  
},
{
    timestamps: true,
}
);

const User = mongoose.model('User', userSchema);

module.exports = User;