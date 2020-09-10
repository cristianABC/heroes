import React, { useContext } from 'react'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types';

export const LoginScreen = ({history}) => {
    const {dispatch} = useContext(AuthContext);
    const handleLogin = () =>{
     //   history.push('/'); push conserva la historia, history.replace borrar el historial
        const lastPath = localStorage.getItem('lastPath') || '/';
        const action = {
            type: types.login,
            payload: {
                name:'cristian'
            }
        }
        dispatch(action);
        history.replace(lastPath);
    }
    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <button className="btn btn-primary"
            onClick={handleLogin}>
                Login
            </button>
        </div>
    )
}
