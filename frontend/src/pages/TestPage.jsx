import React, { useState } from "react";

const FruitSelection = () => {
  // Initialize fruits and available options
  const [fruits, setFruits] = useState([]);
  const [options, setOptions] = useState(["1", "2", "3"]);
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    const selectedBadge = e.target.value;

    setFruits((prevState) => ({
        ...prevState,
        fruits: [...prevState.badges, selectedBadge],
    }));

    setOptions((prevOptions) => prevOptions.filter((option) => option !== selectedBadge));

    setSelectedOption("");
  };

  return (
    <div>
      <select
        className="w-full sm:w-[47%] bg-white border rounded-md p-2"
        value={selectedOption}
        onChange={handleChange} // Listen for change
      >
        <option value="" disabled>
          Select a fruit
        </option>
        {options.map((option) => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>

      <div className="mt-3">
        <h3>Selected Fruits:</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FruitSelection;
