import { useState } from "react"

const EnterPricePrompt = ({getValue}) => {

    const [value, setValue] = useState();
    const handleChange = (e) => {
        if(e.target.value === null || e.target.value === undefined || isNaN(parseFloat(e.target.value))){
            setValue(0);
            getValue(0);
        }
        setValue(parseFloat(e.target.value));
        getValue(parseFloat(e.target.value));
    }

    return (
        <div className='header'>
            <h2> Enter price per kilogram: </h2>
            <input value={value || ''}
                className='type-1 price-input'
                type="number"
                name="input-price"
                id="inp"
                placeholder="Price.."
                step="any"
                onChange={handleChange}
            />
        </div>
    )
}

export default EnterPricePrompt
