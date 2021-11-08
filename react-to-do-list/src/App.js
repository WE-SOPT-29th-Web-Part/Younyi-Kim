import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Todos from "./components/Todos";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
    const [todoInfo, setTodoInfo] = useState({ data: null, status: "both" });

    const handleChangeTodo = (newValue) => {
        setTodoInfo({ data: newValue });
    };

    return (
        <>
            <Header />
            <Navigation todoInfo={todoInfo} setTodoInfo={setTodoInfo} />
            <Todos
                todoInfo={todoInfo}
                setTodoInfo={setTodoInfo}
                handleChangeTodo={handleChangeTodo}
            />
            <Footer />
        </>
    );
}

export default App;
