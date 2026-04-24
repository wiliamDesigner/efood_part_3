import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Menu } from "../../types";

type CartState = {
  itens: Menu[];
  isOpen:Boolean;
};

const initialState: CartState = {
  itens: [],
  isOpen:false

};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Menu>) => {
      state.itens.push(action.payload);
    },

     remove: (state, action: PayloadAction<number>) => {
  state.itens = state.itens.filter(
    (item) => item.id !== action.payload
  );
},

    open: (state) => {
  state.isOpen = true;
},

  close: (state) => {
  state.isOpen = false;
},

    clear: (state) => {
      state.itens = [];
    },
  },
});

export const { add, remove, clear ,open,close } = cartSlice.actions;
export default cartSlice.reducer;