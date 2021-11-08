import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
    const [todoStat, setTodoStat] = useState({ data: [], status: "both" });

    return (
        <>
            <Header />
            <Navigation todoStat={todoStat} setTodoStat={setTodoStat} />
            <Todos todoStat={todoStat} setTodoStat={setTodoStat} />
            <Footer />
        </>
    );
}

export default App;
