import axios from 'axios';
import { FETCH_USER } from './types'


//normal code
// export const fetchUser = () =>{
//     return function(dispatch){
//     axios
//     .get('/api/current_user/')
//     .then(res => dispatch({type:FETCH_USER, payload: res}));
//     }
// };


//refracted code:

export const fetchUser = () => async dispatch => {
  const res=await axios.get('/api/current_user/')
  dispatch({type:FETCH_USER, payload: res.data});
}