const { Schema, model } = require('mongoose');
const thought = require('./thought');
const moment = require('moment');

const thoughtSchema = new Schema(
    {
        thoughtText:{
            type: String,
            required: true,
            maxlength: 280,
        },
        createdAt:{
            type: Date,
            default: Date.now,
            get: (createdAtVal) => dateFormat(createdAtVal),
        },
        username:{
            type: String,
            required: true,
        },
        reactions:{
            reactions: [ReactionSchema],
        },
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    },
);
UserSchema.virtual('reactionsCount').get(function () {
    return this.reactions.length;
});
// create the User model using the UserSchema
const thought = model('thought', thoughtSchema);

// export the User model
module.exports = thought;