import { modalConstant } from "../../constant/modalConstant";

export const modalReducers = (state = {modal: false}, action:any) => {
    
    switch (action.type) {
        case modalConstant.OPEN_MODAL:
            return { modal: action.payload }
    
        case modalConstant.CLOSE_MODAL:
            return { modal: action.payload }

        default:
            return state;
        }
}


