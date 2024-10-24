import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Result from "./Pages/Result";
import Select from "./Pages/Select";
import Test from "./Pages/Test";

export default function App() {
  // const [data, setData] = useState({
  //   catagory: "",
  //   difficulty: "easy",
  //   ammount: 50,
  //   questions: [],
  // });

  const [data, setData] = useState([]);
  return (
    <>
      <Header />

      <main className="container mx-auto w-10/12 max-w-[1200px]">
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Select setData={setData} />} path="/select" />
          <Route element={<Test data={data} />} path="/test" />
          <Route element={<Result />} path="/result" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
