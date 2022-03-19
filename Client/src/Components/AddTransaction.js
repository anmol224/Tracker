import {useState,useContext} from 'react';
import { GlobalContext } from '../Context/GlobalState';
const AddTransaction=() =>
{
    const {AddTransaction} =useContext(GlobalContext);
    const [text,setText]=useState("");
    const [amount,setAmount]=useState(0);
   
    const changeText=(e) =>{
        setText(e.target.value);
    }
    const changeAmount= (e) =>{
        setAmount(e.target.value)
    }
   const checkRadio1=(e) =>{
       if(e.target.checked == true){
                if(amount < 0)
                    setAmount(amount*-1);
       }
   }
   const checkRadio2=(e) =>{
       if(e.target.checked == true){
            setAmount(amount*-1);
       }
   }
    const onSubmit=(e) =>{
            e.preventDefault();
            const transaction={
                text,
                amount:parseInt(amount),
                id:Math.floor(Math.random()*100000)
            }
            AddTransaction(transaction);
    }
    return(
        <>
        <h3>Add Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                    <label htmlFor="text">
                        Text
                    </label><br></br>
                    <input type="text" value={text} onChange={changeText}  placeholder="Enter Name..."></input>
            </div>
            <div className="form-control">
                <label>Add Amount</label>
                <input type="number" onChange={changeAmount} placeholder="Enter Amount ..."></input>
               
            </div>
            <div className="checkbox">
                <label>Income</label>
                    <input type="radio" name='check'   onChange={checkRadio1} ></input>
                    <label>Expense</label>
                    <input type="radio"  onChange={checkRadio2}  name='check' ></input>
            </div>

            <button type="submit" className='btn'>Submit</button>
        </form>
        </>
    )
}
export default AddTransaction;