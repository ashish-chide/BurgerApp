import Axios from "axios";

const instance = Axios.create({
  baseURL: "https://react-my-burger-2b357.firebaseio.com/"
});
export default instance;
