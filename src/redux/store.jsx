import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import loginLogoutSlice from "./loginLogoutSlice";
// import userSlice from "./userSlice";
import topicSlice from "./topicSlice";

// Combine your reducers
const rootReducer = combineReducers({
  topicSlice,
  loginLogout: loginLogoutSlice,
  // userSlice,
});

// Configure persist settings
const persistConfig = {
  key: "root",
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
