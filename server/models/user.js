const mongoose = require("mongoose");

const { Schema } = (require = mongoose);

const UserSchema = new Schema({
  id: Schema.Types.ObjectId,
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  address: {
    street: {
      type: String,
    },
    suite: {
      type: String,
    },
    city: {
      type: String,
    },
    zipcode: {
      type: String,
    },
    geo: {
      lat: {
        type: String,
      },
      lng: {
        type: String,
      },
    },
  },
  phone: {
    type: String,
  },
  website: {
    type: String,
  },
  company: {
    name: {
      type: String,
    },
    catchPhrase: {
      type: String,
    },
    bs: {
      type: String,
    },
  },
});

const User = mongoose.model("user", UserSchema);
module.exports = { User };
