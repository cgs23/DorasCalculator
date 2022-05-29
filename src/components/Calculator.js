import React from "react";
import { useState } from "react";
import EnterPricePrompt from "./EnterPricePrompt";
import ResultList from "./ResultList";

const Calculator = () => {
  const [value, setValue] = useState();
  const [showEuro, setShowEuro] = useState(false);
  const [selectOnlyResults, setSelectOnlyResults] = useState(true);
  const getUpdatedValue = (val) => {
    if (isNaN(parseFloat(val))) setValue(null);
    else setValue(val);
  };

  return (
    <div>
      <div className="container">
        <EnterPricePrompt getValue={getUpdatedValue}></EnterPricePrompt>
        <div>
          <input
            className="chkbx"
            type="checkbox"
            name="show-euro"
            id="show-euro"
            checked={showEuro}
            onChange={(e) => setShowEuro(e.target.checked)}
          />
          <label htmlFor="show-euro">
            <span>Show Euro Symbol in results</span>
          </label>
        </div>
        <div>
          <input
            className="chkbx"
            type="checkbox"
            name="selectable"
            id="selectable"
            checked={selectOnlyResults}
            onChange={(e) => setSelectOnlyResults(e.target.checked)}
          />
          <label htmlFor="selectable">
            <span>Select only results (no grams)</span>
          </label>
        </div>
      </div>
      {value != null && (
        <div className="container">
          <ResultList
            value={value}
            showEuro={showEuro}
            selectable={selectOnlyResults}
          ></ResultList>
        </div>
      )}
    </div>
  );
};

export default Calculator;
