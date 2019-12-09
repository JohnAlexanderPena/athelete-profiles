import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import TextFieldGroup from './common/TextFieldGroup'
// import TextAreaFieldGroup from './common/TextAreaFieldGroup'
import InputGroup from './common/InputGroup'
// import SelectListGroup from '../common/SelectListGroup'
import {createProfile} from '../actions/profileActions'

import { connect } from 'react-redux'

class CreateProfile extends React.Component {

  state = {
    displaySocialInputs: false,
    name: '',
    birthday: '',
    nationality: '',
    association: '',
    gender: '',
    sports: '',
    pets: '',
    // about: {
    //   location: '',
    //   team: ''
    // },
    location: '',
    team: '',
    interests: '',
    charities: '',
    facebook: '',
    snapchat: '',
    twitch: '',
    twitter: '',
    youtube: '',
    instagram: '',
    errors: {}
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      })
    }
  }

  onChange = (event) => {
    event.preventDefault()

    // if(event.target.name === "location") {
    //   this.setState({
    //     about: {
    //       location: event.target.value,
    //       team: this.state.about.team
    //     }
    //   })
    // }
    //
    // if(event.target.name === "team") {
    //   this.setState({
    //     about: {
    //       team: event.target.value,
    //       location: this.state.about.location
    //     }
    //   })
    // }
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    const profileData = {
      name: this.state.name,
      birthday: this.state.birthday,
      nationality: this.state.nationality,
      association: this.state.association,
      gender: this.state.gender,
      sports: this.state.sports,
      charities: this.state.charities,
      about: this.state.about,
      location: this.state.location,
      team: this.state.team,
      interests: this.state.interests,
      pets: this.state.pets,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      twitch: this.state.twitch,
      snapchat: this.state.snapchat,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    }
    this.props.createProfile(profileData, this.props.history)
  }
  render () {
    console.log(this.state)
    const { errors, displaySocialInputs} = this.state

    let socialInputs;
    // Check is state is true to display social inputs
    if(displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Faceook Profile URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
            />
          <InputGroup
            placeholder="Youtube Profile URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
            />
            <InputGroup
              placeholder="Instagram Profile URL"
              name="instagram"
              icon="fab fa-instagram"
              value={this.state.instagram}
              onChange={this.onChange}
              error={errors.instagram}
              />
              <InputGroup
                placeholder="Twitter Profile URL"
                name="twitter"
                icon="fab fa-twitter"
                value={this.state.twitter}
                onChange={this.onChange}
                error={errors.twitter}
                />
            <InputGroup
              placeholder="Snapchat Profile URL"
              name="snapchat"
              icon="fab fa-snapchat"
              value={this.state.snapchat}
              onChange={this.onChange}
              error={errors.snapchat}
              />
              <InputGroup
                placeholder="Twitch Profile URL"
                name="twitch"
                icon="fab fa-twitch"
                value={this.state.twitch}
                onChange={this.onChange}
                error={errors.twitch}
                />
        </div>
      )
    }
    return (
      <div className= "create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="disply-4 text-center">Create Your Profile</h1>
                <p className="lead text-center">
                    Let's Get some Info to create your Profile!
                </p>
                <form onSubmit={this.onSubmit}>
                <small className="d-block pb-3">* = required fields</small>
                  <TextFieldGroup
                    placeholder="Player Name"
                    name="name"
                    value={this.state.name}
                    onChange={this.onChange}
                    error={errors.name}
                    info="Enter the name for your profile. Full name, nickname, etc"
                    />
                      <TextFieldGroup
                        placeholder="Birthday"
                        name="birthday"
                        value={this.state.birthday}
                        onChange={this.onChange}
                        error={errors.birthday}
                        info="Enter your birthday"
                        />
                        <TextFieldGroup
                          placeholder="Player Team"
                          name="team"
                          value={this.state.team}
                          onChange={this.onChange}
                          info="Enter a team if you play for one."
                          />
                          <TextFieldGroup
                            placeholder="Location"
                            name="location"
                            value={this.state.location}
                            onChange={this.onChange}
                            info="Enter your location."
                            />
                      <TextFieldGroup
                        placeholder="Nationality"
                        name="nationality"
                        value={this.state.nationality}
                        onChange={this.onChange}
                        error={errors.nationality}
                        info="Enter a nationality."
                        />
                      <TextFieldGroup
                        placeholder="Association"
                        name="association"
                        value={this.state.association}
                        onChange={this.onChange}
                        error={errors.association}
                        info="Enter association, City & State (eg. New York City, NY)"
                      />
                      <TextFieldGroup
                        placeholder="Gender"
                        name="gender"
                        value={this.state.gender}
                        onChange={this.onChange}
                        error={errors.gender}
                        info="Enter gender"
                        />
                      <TextFieldGroup
                        placeholder="Enter sports you play"
                        name="sports"
                        value={this.state.sports}
                        onChange={this.onChange}
                        error={errors.sports}
                        info="Please use comma, seperated values (eg. golf, baseball, soccer)"
                        />
                        <TextFieldGroup
                          placeholder="Enter interests."
                          name="interests"
                          value={this.state.interests}
                          onChange={this.onChange}
                          error={errors.interests}
                          info="Please use comma, seperated values (eg. golf, baseball, soccer)"
                          />
                          <TextFieldGroup
                            placeholder="Enter any charities you support"
                            name="charities"
                            value={this.state.charities}
                            onChange={this.onChange}
                            error={errors.charities}
                            info="Please use comma, seperated values (eg. charity1, charity2, charity3 ect..)"
                            />
                            <TextFieldGroup
                              placeholder="Enter pets you have"
                              name="pets"
                              value={this.state.pets}
                              onChange={this.onChange}
                              error={errors.pets}
                              info="Please use comma, seperated values (eg. dog, cat, fish)"
                              />
                      <div className="mb-3">
                        <button type="button" onClick={() => {this.setState(prevState => ({
                            displaySocialInputs: !prevState.displaySocialInputs
                          }))}} className="btn btn-light">
                          Add Social Media Links
                        </button>
                        <span className="text-muted">Optional</span>
                      </div>
                      {socialInputs}
                      <input type="submit" value="Submit" className="btn btn-info btn-block mt-4"/>
                </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors, //listening for errors state
})


export default connect(mapStateToProps, { createProfile })(withRouter(CreateProfile));
