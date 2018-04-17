import { combineReducers } from 'redux';
import artists from './artists_reducers';



const rootReducer = combineReducers({
   
   //this name is being renamed from artistList to artists
    artists
})


export default rootReducer;


