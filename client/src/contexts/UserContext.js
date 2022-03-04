import { createContext, useReducer, useEffect} from 'react'
import { userReducer } from '../reducers/userReducer'
import axios from 'axios'
import { GETALL, api } from '../constant'
export const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [userState, dispatch] = useReducer(userReducer, {
		users: [],
        loading: false
	})
    
    const getAll = async() => {
        try {
            const response = await axios.get(`${api}/user/get-all`)
            if(response.data){
                dispatch({ type: GETALL, payload: response.data.results })
            }
            
        } catch (error) {
            
        }
    }
    const userContextData = {getAll, userState}
    return (
        <UserContext.Provider value={userContextData}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider