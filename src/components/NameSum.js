import React, { useState } from "react";

const NameSum = () => {
  const [name, setName] = useState("");
  const [sum, setSum] = useState(0);

  const calculateNameSum = (inputName) => {
    const nameWithoutSpaces = inputName.replace(/\s/g, "").toLowerCase();
    let totalSum = 0;

    for (let i = 0; i < nameWithoutSpaces.length; i++) {
      const charValue = nameWithoutSpaces.charCodeAt(i) - 96; // 'a' is 97 in Unicode
      totalSum += charValue;
    }

    return totalSum;
  };

  const handleInputChange = (event) => {
    const newName = event.target.value;
    setName(newName);
  };

  const handleCalculateSum = () => {
    const newSum = calculateNameSum(name);
    setSum(newSum);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-2xl font-bold mb-4">Name Summation Calculator</h2>
        <label className="block text-sm font-bold mb-2" htmlFor="nameInput">
          Enter your name:
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="nameInput"
          value={name}
          onChange={handleInputChange}
        />
        <button
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleCalculateSum}
        >
          Calculate Sum
        </button>
        {sum > 0 && (
          <div className="mt-4">
            <p className="text-lg font-semibold">Your name's sum is: {sum}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NameSum;
