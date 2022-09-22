import "./App.css";
import StockOverviewPage from "./pages/StockOverviewPage";
import StockDetailPage from "./pages/StockDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WatchListContextProvider } from "./context/watchListContext";

function App() {
  return (
    <main className="container">
      <WatchListContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />}></Route>
            <Route path="/detail/:symbol" element={<StockDetailPage />}></Route>
          </Routes>
        </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
}

export default App;
