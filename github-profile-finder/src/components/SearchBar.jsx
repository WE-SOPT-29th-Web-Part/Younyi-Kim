import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const SearchBar = ({ setUserInfo }) => {
    const [user, setUser] = useState();

    const handleChange = (e) => {
        setUser(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { data } = await axios.get(
            `https://api.github.com/users/${user}`
        );
        setUserInfo(data);
        setUser("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={user || ""}
                onChange={handleChange}
                placeholder="Github 프로필을 검색해보세요."
            />
        </form>
    );
};

const Input = styled.input`
    width: 320px;
    height: 57px;
    padding: 16px;
    color: rgb(229, 230, 231);
    background-color: rgb(36, 39, 43);
    border: 8px solid rgb(105, 105, 105, 0.8);
    border-radius: 20px;
    outline: 0;
`;
export default SearchBar;
