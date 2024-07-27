import React, { useState } from "react";

const TwoRadioButtonGroup = (props) => {
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <label>
        <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={handleChange} />
        Option 1
      </label>
      <label>
        <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={handleChange} />
        Option 2
      </label>
    </div>
  )
}

export default TwoRadioButtonGroup;