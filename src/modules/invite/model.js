const mongoose = require("mongoose");

const inviteSchema = mongoose.Schema({
  inviterId: {
    type: String,
  },
  code: {
    type: String,
  },
  uses: {
    type: Number,
  },
});
const inviteModel = mongoose.model("invite", inviteSchema);
module.exports = inviteModel;
