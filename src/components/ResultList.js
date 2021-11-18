import Result from "./Result"
import { useState } from "react";

const ResultList = ({value, showEuro, selectable}) => {

    const INITIAL_STATE = [
        50,
        100,
        150,
        200,
        250,
        300,
        400,
        500,
        600,
        700,
        750,
        800,
        900,
        1000,
        1500,
        2000,
        2500,
        3000,
        3500,
        4000,
        4500,
        5000
    ]

    const [gramList, setGramList] = useState(INITIAL_STATE);

    const [newGram, setNewGram] = useState();

    const addGrams = () => {
        if(newGram === null || newGram === undefined || isNaN(parseFloat(newGram)) || newGram === ''.trim()){
            setNewGram(null);
            return;
        }
        if (gramList.indexOf(parseFloat(newGram)) === -1){
            let newGramList =[...gramList, parseFloat(newGram)]
            newGramList.sort((a,b) => {return a-b});
            setGramList([...newGramList]);
        }
        setNewGram(null);
    }

    const resetGramList = () => {
        setGramList([...INITIAL_STATE]);
    };

    return (
        <div>
            <h3>Showing results for the value: {value}€ per kg</h3>
            <br />
            <span id="results">
                <table>
                    <thead>
                        <tr>
                            <th>Grams</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                        <tbody>
                        {gramList.map((gram) => (
                            <Result 
                                key={gram} 
                                gram={gram} 
                                price={value} 
                                showEuro={showEuro}
                                selectable={selectable}
                            ></Result>
                        ))}
                    </tbody>
                </table>
            </span>
            <br />
            <br />
            <div>
                <h3>Add your own grams:</h3>
                <input value={newGram || ''} 
                    className='type-1 percentage-input'
                    type="number" 
                    name="input-price" 
                    id="inp-2"
                    min="0"
                    placeholder="Grams.."
                    onChange={(e) => setNewGram(e.target.value)}
                />
                <button className="btn" onClick={addGrams}>Add</button>
                <button className="btn" onClick={resetGramList}>Reset list</button>
            </div>
        </div>
    )
}

export default ResultList
