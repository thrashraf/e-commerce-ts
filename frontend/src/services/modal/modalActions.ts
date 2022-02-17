import { modalConstant } from "../../constant/modalConstant";


export const showModal = () => (dispatch: any) => {
    
    dispatch({
        type: modalConstant.OPEN_MODAL,
        payload: true
    })
    
}
export const closeModal = () => (dispatch: any) => {
    
    dispatch({
        type: modalConstant.OPEN_MODAL,
        payload: false
    })
    
}