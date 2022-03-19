import {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';
const Balance =() =>
{
    const {transactions} =useContext(GlobalContext);
    const amount=transactions.map(t => t.amount);
    const balance=amount.reduce((total,item) => total+=item,0).toFixed(2);
    return(
        <>
            <h3>Remaining Balance</h3>
            <p className='balance'> <span className="rupee"> &#8377;</span> {balance}</p>
        </>
    )
}
export default Balance;