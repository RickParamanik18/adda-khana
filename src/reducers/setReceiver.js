const initState = null;
const setReceiver = (state = initState, action) => {
  if (action.type === "SET_RECEIVER") {
    return action.payload;
  } else {
    return null;
  }
};
export default setReceiver;
