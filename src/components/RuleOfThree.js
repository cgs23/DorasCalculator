import { useState, useMemo } from "react";
import NumericInput from "./NumericInput";
import { formatter } from "../constants/formatter";

const RuleOfThree = () => {
  const [quantityOne, setQuantityOne] = useState(0);
  const [quantityTwo, setQuantityTwo] = useState(1000);
  const [priceOne, setPriceOne] = useState(0);

  const getUpdatedValue = (id, val) => {
    switch (id) {
        case "one":
            isNaN(parseFloat(val)) ? setQuantityOne(null) : setQuantityOne(val);
            break;
        case "two":
            isNaN(parseFloat(val)) ? setPriceOne(null) : setPriceOne(val);
            break;
        case "three":
            isNaN(parseFloat(val)) ? setQuantityTwo(null) : setQuantityTwo(val);
            break;
        default:
            break;
    }
  };

  const isValueSet = (val) => {
      return val !== null && parseFloat(val) !== 0 && val !== undefined;
  }

  const result = useMemo(() => {
    if(isValueSet(quantityOne) && isValueSet(quantityTwo) && isValueSet(priceOne)){
        return formatter.format((priceOne * quantityTwo)/quantityOne).replace(",", "");
    }
    return "-";
  }, [priceOne, quantityOne, quantityTwo])

  return (
    <div className="container">
      <div style={{ display: "flex", gap: "65px" }}>
        <NumericInput
          label="This quantity.."
          placeholder="gr/ml.."
          name="one"
          defaultValue={quantityOne}
          getValue={getUpdatedValue}
        ></NumericInput>
        <NumericInput
          label="costs.."
          placeholder="Price.."
          name="two"
          defaultValue={priceOne}
          getValue={getUpdatedValue}
        ></NumericInput>
      </div>
      <div style={{ display: "flex", gap: "100px", alignItems: "stretch" }}>
        <NumericInput
          label="so, this quantity"
          placeholder="gr/ml.."
          name="three"
          defaultValue={quantityTwo}
          getValue={getUpdatedValue}
        ></NumericInput>
        <div>
          <label htmlFor="result">costs this much!</label>
          <p id="result" style={{ marginTop: "15px" }}>
            {result}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RuleOfThree;
