import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import loginLogoutSlice from "./loginLogoutSlice";
import topicSlice from "./topicSlice";
// import userSlice from "./userSlice";

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
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['register', 'rehydrate'],
        // Ignore these paths in the state
        ignoredPaths: ['some.nested.path'],
      },
    }),
});

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
