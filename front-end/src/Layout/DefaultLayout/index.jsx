import Header from "../../Components/Header";
function DefaultLayout({ children }) {
  return (
    <div className="bg-slate-800 min-h-[1000px]">
      <Header />
      <div className="mt-[133px] py-[40px] mx-[var(--app-margin)]">
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
