import React from "react";
import s from './ProfileInfo.module.css';
import profileDefault from '../../../assets/images/profileDefault.png'

const ProfileInfo = () => {
  return (
    <div className={s.mainInformation}>
      <img alt='Profile Image' src={profileDefault}/>
      <div><b>Alice Wonko</b></div>
      <div><i>status</i></div>
    </div>
  )
}

export default ProfileInfo;