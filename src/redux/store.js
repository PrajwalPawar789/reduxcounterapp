import { configureStore } from "@reduxjs/toolkit";
import CounterSlice  from './slices/CounterSlice';

//store is global state of project where all states are stored i.e slices
export const store = configureStore({
    
    //reducer: { key (is a name of slice ): slicename }
    reducer: {
        counter: CounterSlice
    } 

});
