import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-app-248f2.firebaseio.com/",
});

export default instance;
