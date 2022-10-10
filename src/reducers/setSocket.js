import io from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_BACKEND_URL;
const socket = io(ENDPOINT);

const initState = socket;

const setSocket = (state = initState, action) => {
  return state;
};
export default setSocket;
