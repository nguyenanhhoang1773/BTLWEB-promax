import Header from "../../Components/Header";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "../../Components/Footer";
function DefaultLayout({ children }) {
  const location = useLocation();
  const currentPath = location.pathname;
  useEffect(() => {
    window.scroll(0, 0);
  }, [currentPath]);
  return (
    <div className="bg-slate-800 min-h-[1000px]">
      <Header />
      <div className="mt-[133px] py-[40px] mx-[var(--app-margin)]">
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default DefaultLayout;
