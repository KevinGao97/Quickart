import React from 'react';
import { Link } from 'react-router-dom';
import userPicture from '../../images/defaultUserPicture.jpg';

import './styles.css';

/* Component for the User Profile Page */
class ProfilesPage extends React.Component {
  render() {
    return (
      <section className='mainBackground'>
        <div className='containerProfile'>
          <div className='profileArea'>
            <div className='profile-top backgroundDefault'>
              <img className='profileImg' src={userPicture} alt='' />
              <h1>Johnson Smith</h1>
              <p>Toronto, ON</p>
            </div>
            <div className='profile-about backgroundGrey '>
              <h2 className='textDefaultColor'>Biography</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <h2 className='textDefaultColor'>Niche</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className='profile-posts'>
              <div className='profile-post-title'>
                <h2 className='textDefaultColor'>Posts</h2>
              </div>
              <div className='backgroundWhite'>
                <div>
                  <h4>
                    <Link to='/login'>Title</Link>
                  </h4>
                  <h6>Date</h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>

            <div className='buttons smallMargin'>
              <Link to='/editProfile' className='btn btnDefault'>
                Edit Profile
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProfilesPage;