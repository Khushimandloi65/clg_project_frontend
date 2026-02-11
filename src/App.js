import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routers } from "./routes/constant";
import Header from "./components/header/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {routers.map((singleRoute) => (
          <Route path={singleRoute.route} element={singleRoute.component} />
        ))}
      </Routes>
    </div>
  );
}

export default App;