import logo from "./logo.svg";
import routes, { paths } from "./router";
import DefaultLayout from "./Layout/DefaultLayout";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <Router className="App">
      <Routes>
        {routes.map(({ path, Component }) => (
          <Route
            key={path}
            path={path}
            element={
              <DefaultLayout>
                <Component />
              </DefaultLayout>
            }
          ></Route>
        ))}
      </Routes>
    </Router>
  );
}

export default App;
