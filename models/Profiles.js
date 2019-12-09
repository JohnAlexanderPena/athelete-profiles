const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProfileSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true
    },
    birthday: {
      type: String,
      required: true
    },
    nationality: { //ADD
      type: String
    },
    association: { //ADD
      type: String,
    },
    gender: { //ADD
      type: String,
    },
    sports: {
      type: [String]
    },
    interests: {
      type: [String]
    },
    charities: {
      type: [String]
    },
    about: {
      location: {
        type: String,
      },
      team: {
        type: String,
      },
    },
    social: { //ADD
      youtube: {
        type: String
      },
      snapchat: {
        type: String
      },
      twitter: {
        type: String
      },
      facebook: {
        type: String
      },
      instagram: {
        type: String
      },
      twitch: {
        type: String
      }
    },
    pets: {
      type: [String]
    },
    achohol: { // ADD
        type: Boolean,
        default: false
    },
    married: { //ADD
      type: Boolean,
      default: true
    }
});


module.exports = Profile = mongoose.model('Profile', ProfileSchema)
