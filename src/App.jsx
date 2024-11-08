// src/App.jsx or src/index.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Layout from "./components/layout/layout";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import BooksPage from "./pages/bookingsPage/bookingsPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/bookmyhotel" element={<BooksPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
