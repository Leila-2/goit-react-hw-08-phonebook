export const getIsLoggedIn = (state) => state.auth.isLoggedIn;

export const getUsername = (state) => state.auth.user.name;

export const getUserEmail = (state) => state.auth.user.email;

export const isFetchingUser = (state) => state.auth.isFetchingUser;

export const checkToken = (state) => state.auth.token;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
//   getUserEmail,
//   isFetchingUser,
//   checkToken,
// };
// export default authSelectors;
