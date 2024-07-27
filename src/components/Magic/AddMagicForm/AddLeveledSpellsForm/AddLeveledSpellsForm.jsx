import React from "react";
import NameWithDescriptionField from "../../../common/NameWithDescriptionInput/NameWithDescriptionField";
import Foldable from "../../../common/FoldableText/Foldable";
import styles from "./AddLeveledSpellsForm.module.css";

const AddLeveledSpellsForm = (props) => {

  let counter = [props.count];
  for (let i = 0; i < props.count; i++) {
    counter[i] = i + 1;
  }

  return (
    <div>
      <Foldable
        title={props.title}
        foldablePart={
          <div className={styles.magicLevel}>
            {counter.map((count) => {
              return (
                <div>
                  <NameWithDescriptionField
                    name={`${props.name} ${count}`}
                    fieldName={`${props.fieldName}_${count}`}
                  />
                </div>
              )
            })}
          </div>
        }
      />
    </div>
  )
}

export default AddLeveledSpellsForm;
