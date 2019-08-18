import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import ProvinceReducer from './reducer_province';
import DistrictReducer from './reducer_district';
const rootReducer = combineReducers({
  district: DistrictReducer,
  posts: PostsReducer,
  provinces: ProvinceReducer,
  form: formReducer
});

export default rootReducer;
