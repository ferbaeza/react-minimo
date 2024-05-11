import "./styles/global.scss";
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Navbar from "./components/Navbar/Navbar";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Footer from "./components/Footer/Footer";

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <Home />
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
