import axios from "axios";

const API_BASE_URL = "http://localhost:5000/node-api";

class NoteService {
  getNotesByUser(user) {
    return axios.post(API_BASE_URL + "/notes-by-user", user);
  }
  addNote(noteObj) {
    return axios.post(API_BASE_URL + "/note", noteObj);
  }
  updateNote(noteId, noteObj) {
    return axios.put(API_BASE_URL + "/note/" + noteId, noteObj);
  }
  deleteNote(noteId) {
    return axios.delete(API_BASE_URL + "/note/" + noteId);
  }
}
export default new NoteService();