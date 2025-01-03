"use client";
import { Provider } from "react-redux";
import { store, persistor } from "../index";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
