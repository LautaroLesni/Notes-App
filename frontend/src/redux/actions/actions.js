import { LOG_USER, GET_NOTES, DELETE_NOTE, POST_NOTE } from "./actions_vars";
import axios from "axios";

export const LogUser = (response) => (dispatch) => {
        dispatch({
          type: LOG_USER,
          payload: response,
        });
  };

  export function getNotes(id) {
    return function (dispatch) {
      axios.get("/notes/" + id)
        .then((res) => {
          dispatch({
            type: GET_NOTES,
            payload: res.data,
          });
        })
        .catch((err) => {console.log(err.message)});
    };
  }

  export function postNote(input) {
    return function (dispatch) {
      axios.post("/notes/", input)
        .then((res) => {
          dispatch({
            type: POST_NOTE,
            payload: res.data,
          });
        })
        .catch((err) => {console.log(err.message)});
    };
  }
  export function editNote(input) {
    return function (dispatch) {
      axios.put("/notes/", input)
        .then((res) => {
          dispatch({
            type: POST_NOTE,
            payload: res.data,
          });
        })
        .catch((err) => {console.log(err.message)});
    };
  }

  export function deleteNote(noteid, userid){
    return function (dispatch) {
    axios.delete(`/notes/${noteid}/${userid}`)
    .then((res)=>{
      dispatch({
        type: DELETE_NOTE,
        payload: res.data
      })
    })
    .catch((err)=>{console.log(err.message)})
    }
  }