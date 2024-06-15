export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectIsLoggin = state => state.auth.isLoggedIn;
export const selectIsRefresh = state => state.auth.isRefreshing;
