const Validator = require('validator');
const isEmpty = require('./is-empty.js');


module.exports  = function validateLoginInput(data){
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : ''; //set to empty string if null
  // data.workouts = !isEmpty(data.workouts) ? data.workouts : ''; //set to empty workouts if null
  if (!Validator.isLength(data.name, { min: 2, max: 40})) {
    errors.name = 'Handle needs to be between 2 and 40 characters'
  }


  if (Validator.isEmpty(data.name)) {
    errors.name = 'Profile name is required'
  }


  // if (Validator.isEmpty(data.workouts)) {
  //   errors.workouts = 'Workout field is required'
  // }



  if(!isEmpty(data.youtube)){ // if youtube is not empty
    if(!Validator.isURL(data.youtube)) { // validate the URL
      errors.youtube = 'Not a valid URL' // if URL is invalid send error
    }
  }

  if(!isEmpty(data.twitter)){ // if twitter is not empty
    if(!Validator.isURL(data.twitter)) { // validate the URL
      errors.twitter = 'Not a valid URL' // if URL is invalid send error
    }
  }

  if(!isEmpty(data.twitch)){ // if twitch is not empty
    if(!Validator.isURL(data.twitch)) { // validate the URL
      errors.twitch = 'Not a valid URL' // if URL is invalid send error
    }
  }

  if(!isEmpty(data.facebook)){ // if facebook is not empty
    if(!Validator.isURL(data.facebook)) { // validate the URL
      errors.facebook = 'Not a valid URL' // if URL is invalid send error
    }
  }


  if(!isEmpty(data.instagram)){ // if instagram is not empty
    if(!Validator.isURL(data.instagram)) { // validate the URL
      errors.instagram = 'Not a valid URL' // if URL is invalid send error
    }
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
}
