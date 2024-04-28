import React from "react";

function Input({ setId, id, handleFetch, inputError }) {
  return (
    <div className="userInputDiv">
    <div className="inputHeaderDiv">
      <h4 className="inputHeader">Enter your Tracking Details!</h4>
      </div>
      <div className="userInput">
        <label htmlFor="invoice">Invoice Number</label>
        <input
          type="number"
          id="invoice"
          placeholder="Invoice number..."
          value={id}
          onChange={(e) => setId(e.target.value)}
          onWheel={() => false}
        />
        {inputError && <span className="error1"> *{inputError}</span>}
      </div>
      <div className="submitBtn">
        <button onClick={handleFetch}>View Details</button>
      </div>
    </div>
  );
}

export default Input;
