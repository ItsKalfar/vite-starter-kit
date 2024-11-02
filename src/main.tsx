import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ThemeProviderWrapper from "./components/theme-provider.tsx";
import { Provider } from "react-redux";
import store, { persistor } from "@/store";
import { PersistGate } from "redux-persist/integration/react";
import { ReactQueryProvider } from "@/react-query/react-query-provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReactQueryProvider>
          <ThemeProviderWrapper>
            <App />
          </ThemeProviderWrapper>
        </ReactQueryProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);
