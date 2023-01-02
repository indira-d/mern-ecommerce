
import {loginFailure, loginStart, loginSuccess} from "./userSlice";
import {publicRequest} from "../requestMethod";



export const  login = async (dispatch, user) => {
    dispatch(loginStart())
    console.log('user', user)
    try{
        const res = await publicRequest.post("/auth/login", user)
        console.log('res', res)

        dispatch(loginSuccess(res.data))
    }catch (e) {
        dispatch(loginFailure())
    }
}