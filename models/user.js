const { Schema, model } = require("mongoose");

//schema to create a username model
const UserSchema = new Schema({
  username: {
    type: String,
    Unique: true,
    Required: true,
    Trimmed: true,
  },
  email: {
    type: String,
    Unique: true,
    Required: true,
    match: [/.+@.+\..+/],
  },
  thoughts: {
    type: Schema.Types.ObjectId,
    ref: "Thought",
  },
  friends: [
  {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
]
},
  {
    toJSON: {
        virtuals: true
    },
    id: false
},
);
UserSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});
// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;