import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    loading: false,
    portfolioData: null
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        loadingStarts: (state) =>{
            state.loading = true
        },
        loadingSucess: (state )=>{
            state.loading = false
        },
        loadingFails:(state )=>{
            state.loading = false
        },
        setPortfolioData: (state,action)=>{
            state.portfolioData = action.payload
        }
    }
})

export const {loadingFails,loadingStarts,loadingSucess,setPortfolioData} = rootSlice.actions;
export default rootSlice.reducer;