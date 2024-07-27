import React  from "react";
import styles from './ItemsList.module.css';
import { Link } from "react-router-dom";

const ItemsList = (props) => {

  return (
    <div className={styles.itemsList}>
      {props.itemsList.map(item =>
        <div key={item.id} className={styles.item}>
          <Link to={`/${props.type}/${item.id}`}>{item.name}</Link>
        </div>
      )}
    </div>
  )
}

export default ItemsList;