import "./App.css";
import StockOverviewPage from "./pages/StockOverviewPage";
import StockDetailPage from "./pages/StockDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <main className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StockOverviewPage/>}></Route>
          <Route path="/detail/:symbol" element={<StockDetailPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
