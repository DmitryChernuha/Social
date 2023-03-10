import React from "react";
import './ProfileCard.css'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'


const ProfileCard = () => {
    return (
        <div className='ProfileCard'>
            <div className="ProfileImages">
                <img src={Cover} alt="Cover"/>
                <img src={Profile} alt="Profile"/>
            </div>

            <div className="ProfileName">
                <span>Zendaya MJ</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div className="FollowStatus">
                <hr/>
                <div>
                    <div className="follow">
                        <span>5000</span>
                        <span>Following</span>
                    </div>
                    <div className="vl"> </div>
                    <div className="follow">
                        <span>5000</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr/>
            </div>

            <span>My Profile</span>
        </div>

    )
}

export default ProfileCard


