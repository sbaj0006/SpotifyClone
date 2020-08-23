export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQDtQddjxMgAHl6NOZhEhuDfj6nJDcs-ABLtY8fS8nqgtg-OwGC_GxKW3Nqlqgf5gzuQ8f57S1jX75wkYuWkzMjO8EwVhyLf3OxHLoJaJahjFDHr8TUSzpn0TS08GteY4uQm2O0Z_9Vo5kRalvNmxO2eGX0WGHcz5ytgxI-1nXZ2U2ln",
};

const reducer = (state, action) => {
  //console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
