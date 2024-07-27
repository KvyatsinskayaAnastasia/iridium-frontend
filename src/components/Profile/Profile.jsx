import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import CharactersInfo from "./CharactersInfo/CharactersInfo";
import TwoPartScreen from "../common/TwoPartScreen/TwoPartScreen";

const Profile = (props) => {
  return (
    <TwoPartScreen
      secondPartTitle={"Персонажи"}
      firstPartInfo={
          <ProfileInfo/>
      }
      secondPartInfo={
        <div>
          <CharactersInfo/>
          <div className={styles.buttonContainer}>
            <button
              className={styles.addButton}
              onClick={props.onClick}
            >
              Новый персонаж
            </button>
          </div>
        </div>
      }
    />
  )
}

export default Profile;