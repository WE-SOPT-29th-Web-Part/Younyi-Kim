import React, { useState, useEffect } from "react";

function DateInput({ year, month, date, setYear, setMonth, setDate }) {
    useEffect(() => {
        console.log(year);
    }, [year, month, date]);

    const handleChange = (e, setState) => {
        setState(e.target.value);
    };

    const setToday = () => {
        const today = new Date();
        setYear(today.getFullYear());
        setMonth(today.getMonth() + 1);
        setDate(today.getDate());

        console.log(today);
    };

    return (
        <div id="dateInput">
            <button onClick={setToday}>오늘</button>
            <div>
                <input
                    onChange={(e) => handleChange(e, setYear)}
                    type="text"
                    className="dateInput__input"
                    value={year}
                />
                년
                <input
                    onChange={(e) => handleChange(e, setMonth)}
                    type="text"
                    className="dateInput__input"
                    value={month}
                />
                월
                <input
                    onChange={(e) => handleChange(e, setDate)}
                    type="text"
                    className="dateInput__input"
                    value={date}
                />
                일을 기준으로
            </div>
        </div>
    );
}

export default DateInput;
