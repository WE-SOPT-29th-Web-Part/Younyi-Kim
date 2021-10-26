import { useState } from "react";
import "./App.css";
import CenterText from "./components/CenterText";
import DateInput from "./components/DateInput";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
    const [year, setYear] = useState(new Date().getFullYear());
    const [month, setMonth] = useState(new Date().getMonth() + 1);
    const [date, setDate] = useState(new Date().getDate());

    return (
        <main id="main">
            <section id="home__top">
                <Header />
                <DateInput
                    year={year}
                    month={month}
                    date={date}
                    setYear={setYear}
                    setMonth={setMonth}
                    setDate={setDate}
                />
            </section>

            <CenterText />

            <section id="home__bottom">
                <Result year={year} month={month} date={date} />
                <Footer />
            </section>
        </main>
    );
}

export default App;
