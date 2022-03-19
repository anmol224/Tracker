import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";
const IncomeExpense=() =>
{
    const {transactions}=useContext(GlobalContext);
    const income=transactions.map(t => t.amount).filter(t => t>0).reduce((total,item) => total+=item,0).toFixed(2); 
    const expense=transactions.map(t => t.amount).filter(t =>t <0).reduce((total,item) => total+=item,0).toFixed(2);
    return(
        <>
            <div className="inc-exp-container">
                <div>
                    <h4 style={{fontSize:"20px"}}>Income</h4>
                    <p className="money plus"><span className="rupee"> &#8377;</span>{income}</p>
                </div>
                <div>
                    <h4 style={{fontSize:"20px"}}> Expense</h4>
                    <p className="money minus"><span className="rupee"> &#8377;</span>{(-1) * expense}</p>
                </div>
            </div>
        </>

    )
}
export default IncomeExpense;