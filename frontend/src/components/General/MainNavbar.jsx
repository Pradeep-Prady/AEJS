import Navbar from "./Navbar";
import { Footer } from "./Footer";

const MainNavbar = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default MainNavbar;
