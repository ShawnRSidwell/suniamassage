import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import SchemaOrgData from "./SchemaOrgData";

function AppLayout() {
  return (
    <>
      <SchemaOrgData />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default AppLayout;
