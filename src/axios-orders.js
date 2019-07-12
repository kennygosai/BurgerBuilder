import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-18f1f.firebaseio.com/"
});

export default instance;
