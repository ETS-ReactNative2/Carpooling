const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String, 
    required: true
  },
  password: {
    type: String, 
    required: true
  },
  address: {
    type: String
  },
  roles: {
    type: String, 
    enum: ['passenger', 'driver', 'admin']
  },
  identityCard: {
    type: String
  },
  drivingLicense: {
    type: String
  },
  ratingTotal: {
    type: Number
  },
  ratingCount: {
    type: Number
  }
});

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hash = await bcrypt.hash(this.password, 8);
    this.password = hash;
  }

  next();
});

userSchema.methods.comparePassword = async function (password) {
  const result = bcrypt.compareSync(password, this.password);
  return result;
};

module.exports = mongoose.model("User", userSchema);
