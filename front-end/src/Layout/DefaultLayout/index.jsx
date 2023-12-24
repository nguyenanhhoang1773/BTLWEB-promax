import Header from "../../Components/Header";
function DefaultLayout({ children }) {
  return (
    <div className="bg-slate-800 min-h-[1000px]">
      <div className="mx-[400px]">
        <Header />
        <h3>Default Layout</h3>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;
