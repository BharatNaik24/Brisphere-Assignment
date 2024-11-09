// src/App.jsx or src/index.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BooksPage from "./pages/bookingsPage/bookingsPage";
import PaymentsConfirmed from "./pages/confirmationpage/confirmationpage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Layout />} />
          <Route exact path="/bookmyhotel" element={<BooksPage />} />
          <Route
            exact
            path="/payments-confirmed"
            element={<PaymentsConfirmed />}
          />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
