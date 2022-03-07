import "./App.css";
import Login from "./containers/Login";
import Header from "./containers/Header";
import Footer from "./containers/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <div>
      <Header name="Unknown" />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
