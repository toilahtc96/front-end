import { FETCH_DISTRICT } from '../actions';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_DISTRICT:
            return action.payload.data;
        default:
            return state;
    }

}