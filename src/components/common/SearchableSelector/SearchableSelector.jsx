import Select from "react-select";
import React from "react";
import styles from '../SearchableSelector/SearchableSelector.module.css'

const SearchableSelector = (props) => {
  const { input, options, name } = props;

  return (
    <div>
      <label className={styles.searchableLabel}>{props.label}</label>
      <Select
        classNames={{
          control: () => styles.searchableControl,
          placeholder: () => styles.searchablePlaceholder,
          label: () => styles.searchableLabel
        }}
        {...input}
        onChange={value => input.onChange(value)}
        name={name}
        value={input.value}
        options={options}
        onBlur={() => input.onBlur()}
        isSearchable={true}
        placeholder="Выберите расу"
      />
    </div>
  );
}

export default SearchableSelector;