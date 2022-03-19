import { GlobalContext } from "../Context/GlobalState";
import { useContext, useEffect } from "react";
import {Transaction} from './Transaction';
const TransactionList=() =>{
    const {transactions,getTransaction}=useContext(GlobalContext);
    useEffect(() =>{
        getTransaction();
    },[])
    return(
        <>
            <ul className="list">
              
                {
                    transactions.map((transaction) => {
                        return(
                            <>
                                <Transaction transaction={transaction} />
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default TransactionList;