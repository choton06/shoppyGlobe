
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    name: "cart",
    initialState:{
        items:[]
    },
    reducers: {
     addItem: (state,action)=>{
        
         let Item = state.items.find(Item => Item.id == action.payload.id);

         const data = {...action.payload, quantity:1};

         if(!Item){
            state.items.push(data)
         }else{
            Item.quantity++
         }
    },
    removeItem: (state,action) =>{
        let Item = state.items.find(Item => Item.id == action.payload.id);
        Item.quantity--;
        if(Item.quantity == 0){
            const Items = state.items.filter(item => item.id != action.payload.id);
            state.items = Items;
        }
    },
    clearItem: (state, action) =>{
        state.items =[]
    }
}
})


 export const{addItem,removeItem,clearItem}  = CartSlice.actions;

 export default CartSlice.reducer;