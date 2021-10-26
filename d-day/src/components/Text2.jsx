import React, { useState, useEffect, useCallback } from "react";

function Text2({ year, month, date }) {
    const [inputValue, setInputValue] = useState();
    const [resultDate, setResultDate] = useState("yyyy년 mm월 dd일");

    const handleChange = (e) => {
        if (!e.target.value) {
            setInputValue("");
            setResultDate("yyyy년 mm월 dd일");
            return;
        }

        setInputValue(e.target.value);
        printDate(e.target.value);
    };

    const printDate = useCallback(
        (value) => {
            if (value === undefined || value === "") {
                setResultDate("yyyy년 mm월 dd일");
                return;
            }

            const tempDate = new Date();

            tempDate.setFullYear(year);
            tempDate.setMonth(Number(month) - 1);
            tempDate.setDate(Number(date) - Number(value));

            const result = `${tempDate.getFullYear()}년 ${
                tempDate.getMonth() + 1
            }월 ${tempDate.getDate()} 일`;

            setResultDate(result);
        },
        [year, month, date]
    );

    useEffect(() => {
        printDate(inputValue);
    }, [inputValue, printDate]);

    return (
        <div className="result__text">
            <div className="text__left">
                D-
                <input
                    type="text"
                    value={inputValue || ""}
                    onChange={handleChange}
                />{" "}
                는?
            </div>
            <div className="text">{resultDate}</div>
        </div>
    );
}

export default Text2;
