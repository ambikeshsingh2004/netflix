import { createSlice } from "@reduxjs/toolkit";

 const configurationslice = createSlice({
  name:"config",
  initialState:{
    lang:"english",
  },
  reducers:{
    changelanguage:(state,action)=>{
      state.lang = action.payload;
    },
  },
 })
export const{changelanguage} = configurationslice.actions;
 export default configurationslice.reducer;