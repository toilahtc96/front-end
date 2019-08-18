import { FETCH_PROVINCE } from '../actions';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_PROVINCE:
            return action.payload.data;
        
        default:
            return state;
    }

}