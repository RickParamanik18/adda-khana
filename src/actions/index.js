const setReceiver = (uid) => {
  return {
    type: "SET_RECEIVER",
    payload: uid,
  };
};

const setSearchResult = (result) => {
  return {
    type: "SET_SEARCH_RESULT",
    payload: result,
  };
};

const setSocket = () => {
  return {
    type: "SET_SOCKET",
  };
};

export { setReceiver, setSearchResult, setSocket };
