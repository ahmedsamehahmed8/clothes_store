import productsSlice from "./productsSlice/productsSlice";
import user_auth_slice from "./user_auth/user_auth_slice";
import cart_items_Slice from "./cart_items/cart_item_Slice";
import order_complete_slice from "./order_complet/order_complete_slice";
import profileslice from "./profileslice/profileslice";

import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

const persistconfig = {
  key: "root",
  storage,
  whitelist: ["user_auth"],
};

const user_auth = {
  key: "user_auth",
  storage,
  whitelist: ["token", "user"],
};
const user_items = {
  key: "user_items",
  storage,
  whitelist: ["item_id"],
};

const rootreducer = combineReducers({
  profileslice: profileslice,
  order_complete: order_complete_slice,
  products: productsSlice,
  user_items: persistReducer(user_items, cart_items_Slice),
  user_auth: persistReducer(user_auth, user_auth_slice),
});
const persistedReducer = persistReducer(persistconfig, rootreducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
// Infer the type of makeStore
const persistor = persistStore(store);

export { store, persistor };
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
