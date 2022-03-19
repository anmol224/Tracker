import { GlobalContext} from "../Context/GlobalState";
import { useContext } from "react";
export const Transaction=({transaction}) =>
{
    const {deleteTransaction}=useContext(GlobalContext);
const sign=transaction.amount < 0?"minus":"plus";
    return(
        
            <li className={sign}>{transaction.text}<span><span className="rupee"> &#8377;</span>{Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={() => deleteTransaction(transaction._id)} >X</button></li>
        
    )
}