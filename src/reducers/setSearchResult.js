let initState = [];

const setSearchResult = (state = initState, action) => {
  if (action.type === "SET_SEARCH_RESULT") {
    return action.payload;
  } else {
    return [];
  }
};

export default setSearchResult;
