import { FETCH_DOWNLOAD_FILE } from '../actions';
import _ from 'lodash';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_DOWNLOAD_FILE:
            return action.payload.data;
        default:
            return state;
    }

}