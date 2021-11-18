const Result = ({ gram, price, showEuro, selectable }) => {
    const calc = (price * gram)/1000;
    return (
        <tr className={gram===1000 ? 'one-kg' : ''}>
            <td><span className={selectable ? 'noselect' : ''}>{gram} gr.  </span></td>
            <td>{calc}{showEuro ? '€' : ''}</td>
        </tr>
    )
}
export default Result
