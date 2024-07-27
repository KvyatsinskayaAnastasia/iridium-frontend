import React from "react";
import styles from './RaceItem.module.css';
import TwoPartScreen from "../../common/TwoPartScreen/TwoPartScreen";

const RaceItem = (props) => {

  return (
    <TwoPartScreen
      firstPartTitle={props.race.name}
      firstPartInfo={
        <div>
          <div className={styles.raceDescription}>{props.race.description}</div>
        </div>
      }
    />
  )
}

export default RaceItem;