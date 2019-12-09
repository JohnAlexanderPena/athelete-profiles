import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getAllProfiles } from '../actions/profileActions'
import { Link } from 'react-router-dom'



class Profiles extends React.Component {

  componentDidMount() {
    this.props.getAllProfiles()
  }

  render () {
    const showProfileName = this.props.profiles.profiles.map(profile => {

      const entries = profile.social ? Object.entries(profile.social) : null

      const socialMedias = entries ? entries.map(entry =>{
        return (<li>{entry[0]}: {entry[1]}</li>)
      }) : null


      return (
        <tr key={profile.name}>
      <td>{profile.name}</td>
      <td>{profile.birthday}</td>
      <ul>
        <li>Location: {profile.about.location || "empty"}</li>
        <li>Team: {profile.about.team || "empty"}</li>
      </ul>
      <td>Sports Played: {profile.sports.join(',')}<br/>
          Favorite Charities: {profile.charities.join(',')}<br/>
          Pets: {profile.pets ? profile.pets.join(',') : null}<br/>
          Social Media: {profile.social ? socialMedias : []}
      </td>
    </tr>
  )}
    )


    return(
      <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Birthday</th>
            <th>About</th>
            <th>More Info</th>
          </tr>
          {showProfileName}
        </thead>
      </table>
      <Link to="/create-profile" className="btn btn-dark">
              Create New Profile
            </Link>
      </div>
    )
  }
}

Profiles.propTypes = {
  profiles: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
  profiles: state.profiles
})

export default connect(mapStateToProps, {getAllProfiles})(Profiles);
