import axios from 'axios';

import regeneratorRuntime from "regenerator-runtime";
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';
export const FETCH_MY_POST = 'fetch_my_post';
export const FETCH_PROVINCE = 'fetch_my_province';
export const FETCH_DISTRICT = 'fetch_my_district';
export const FETCH_LST_REPORT = 'fetch_lst_report';
export const FETCH_DOWNLOAD_FILE = 'fetch_download_file';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=conght23223';

const MY_URL = 'http://localhost:8080';

export function fetchPosts() {
    const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
    return {
        type: FETCH_POSTS,
        payload: request
    };
}
export function createPost(values, callback) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_POST,
        payload: request
    }

}
export function deletePost(id, callback) {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
        .then(() => callback());
    return {
        type: DELETE_POST,
        payload: id
    }
}

export function fetchMyPost() {
    const request = axios.get(`${MY_URL}/posts`);
    return {
        type: FETCH_MY_POST,
        payload: request
    }

}

export function fetchMyProvince() {
    const request = axios.get(`${MY_URL}/provinces`);
    return {
        type: FETCH_PROVINCE,
        payload: request
    }
}

export function fetchMyDistrictByProcinceValue(provinceCode, callback) {

    const request = axios.get(`${MY_URL}/district/${provinceCode}`).then(callback);

    return {
        type: FETCH_DISTRICT,
        payload: request
    }



}

export function getList(values, callback) {
    const request = axios.post(`${MY_URL}/getLst`, values).then(callback);

    return {
        type: FETCH_LST_REPORT,
        payload: request
    }
}
export function getFile(fileName, callback) {
    const request = axios.get(`${MY_URL}/downloadFile/${fileName}`).then(callback());
    return {
        type: FETCH_DOWNLOAD_FILE,
        payload: request
    }
}