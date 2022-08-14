const {Schema, model} = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Enter a valid email address.'],
        },
        password:{
            type: String,
            required: true,
            minLength:8,
        },
        posts: [
            {
                type: Schema.Types.ObjectId,
                ref:'Post'
            }
        ],
        followers:[
            {
                type: Schema.Types.ObjectId,
                ref:'User'
            }
        ]
    },
    {
        toJSON:{
            virtuals:true,
        }
    }
);
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
  };

  userSchema.virtual('followerCount').get(function(){
    return this.followers.length;
  });
  
  const User = model('User', userSchema);
  
  module.exports = User;