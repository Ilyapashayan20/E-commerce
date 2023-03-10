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
    default: "admin"
  },
  avatarUrl: String,
  
},
{
    timestamps: true,
}
);

const User = mongoose.model('User', userSchema);

export default  User;