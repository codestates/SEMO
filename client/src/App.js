import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <main>
        <section className="features">
        <Routes>
          <Route path="/" element={<Footer/>}></Route>
        </Routes>
        </section>
      </main>

    </div>
    </BrowserRouter>
  );
}

export default App;
