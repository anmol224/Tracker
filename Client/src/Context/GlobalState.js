import {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

const initialState={
    transactions:[],
    error:null,
    loading:false
}
export const GlobalContext=createContext(initialState);
export const GlobalProvider=({children}) =>{
    
    const [state,dispatch]=useReducer(AppReducer,initialState);
    async function getTransaction(){
            try {
                const res=await axios.get('/api/v1/transactions');
                
                dispatch({
                    type:"GET_TRANSACTIONS",
                    payload:res.data.data
                    
                })
                
            } catch (error) {
                dispatch({
                    type:"TRANSACTION_ERROR",
                    payload:error.response.data.Error
                })
            }
    }
  const deleteTransaction=async (id) =>{
      try {
         await  axios.delete(`/api/v1/transactions/${id}`);
          dispatch({
              type:"DELETE_TRANSACTION",
              payload:id
          })
      } catch (error) {
          dispatch({
              type:"TRANSACTION_ERROR",
              payload:error.response.data.Error
          })
      }
  }
    const AddTransaction= async (transaction) =>{
        try {
                const config={
                    header:{
                        'Content-Type':"application/json"
                    }
                }                                                                        
          const res=  await axios.post('/api/v1/transactions',transaction,config);
            dispatch({
                type:"ADD_TRANSACTION",
                payload:res.data.data
            })
        } catch (error) {
            dispatch({
                type:"TRANSACTION_ERROR",
                payload:error.response.data.Error
            })
        }
    }
    return(
   
        <GlobalContext.Provider value={{transactions:state.transactions ,deleteTransaction,AddTransaction
        ,getTransaction,error:state.error,loading:state.loading}} >
                {children}
        </GlobalContext.Provider>
        
    )
}