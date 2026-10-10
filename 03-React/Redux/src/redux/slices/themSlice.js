import { createSlice } from "@reduxjs/toolkit";

export const themSlice = createSlice({
    name:'theme',
    initialState:{
      value:'light'
    },
    reducers:{
        changeThemeToLight:(state)=>{
           state.value = 'light'
        },
         changeThemeToDark:(state)=>{
          state.value = 'dark'
         }

    }
})

export const {changeThemeToLight , changeThemeToDark} = themSlice.actions
export default themSlice.reducer