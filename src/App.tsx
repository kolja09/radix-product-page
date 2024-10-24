import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Theme } from "@radix-ui/themes";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { persistor, store } from "./redux/store";

import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import styles from "./App.module.css";

const App: React.FC = () => (
  <Theme>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className={styles.appContainer}>
            <Header />
            <div className={styles.content}>
              <Routes>
                <Route path="/" element={<Navigate to="/products" replace />} />
                <Route path="/products" element={<ProductPage />} />
                <Route path="/products/:id" element={<ProductDetails />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </PersistGate>
    </Provider>
  </Theme>
);

export default App;
