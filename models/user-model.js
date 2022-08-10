const { Schema, model } = require('mongoose');



const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'], 
    },
    password: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
  
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
  }
);


const User = model('User', UserSchema);


module.exports = User;