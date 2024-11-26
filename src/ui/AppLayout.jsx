import Header from "./Header";
import Footer from "./Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
        <ScrollRestoration />
      </main>

      <Footer />
    </>
  );
}

export default AppLayout;
