const ko = require('nekodb')

const Message = ko.Model('Message', {
	sender: ko.String[30],
	body: ko.String[200],
	date: ko.Date.now(),
})

module.exports = Message;
// const mongoose = require("mongoose");

// // Save a reference to the Schema constructor
// const Schema = mongoose.Schema;

// // Using the Schema constructor, create a new UserSchema object
// // This is similar to a Sequelize model
// var MessageSchema = new Schema({
//   sender: String[30],
//   body: String[200]
//   });

// // This creates our model from the above schema, using mongoose's model method
// var Message = mongoose.model("Message", MessageSchema);

// // Export the Article model
// module.exports = Message;
