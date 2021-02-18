import * as actionTypes from '../types/types'

const initialState = {
    openDialog: false
}

const dialogReducer = (state= initialState,action) =>{
     switch(action.type){
         case actionTypes.OPEN_DIALOG:
              return {
                   ...state,
                   openDialog:!state.openDialog
              }
        default : 
              return state;
     }
}

export default dialogReducer;