import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../../components/navigation/navigation.component";
import Footer from "../../components/footer/footer.component";

const Layout = () => {
  return (
    <Fragment>
      <Navigation />
      <Outlet />
      <Footer />
    </Fragment>
  );
};

export default Layout;
