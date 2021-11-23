import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Profile = () => {
    return (
        <>
            <StyledProfile>
                <img
                    src='https://media.vlpt.us/images/younyikim/profile/b4c2c97c-ca03-425f-811d-f5dc0de5e936/KakaoTalk_20210826_220638015_01.jpg?w=240'
                    alt=''
                    class='header__item-profile'
                />
                <div>
                    <h2>Younyi</h2>
                    <p>천천히 작성해 나가는 Web front-end 개발 일지</p>
                </div>
                <StyledLine></StyledLine>
                <StyledSNS>
                    <a>
                        <FaGithub />
                    </a>
                    <a>
                        <FaInstagram />
                    </a>
                    <a>
                        <FaLinkedin />
                    </a>
                </StyledSNS>
            </StyledProfile>
            <StyledDiv></StyledDiv>
        </>
    );
};

export default Profile;

const StyledProfile = styled.div`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    align-items: flex-start;
    width: calc(100% - 2rem);
    margin-top: 50px;
    font-family: 'Roboto', sans-serif;

    img {
        display: block;
        height: 80px;
        width: 80px;
        border-radius: 50%;
        box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
    }

    div h2 {
        font-size: 20px;
        font-weight: bold;
        margin-top: 15px;
    }

    div p {
        font-size: 13px;
        margin-top: 10px;
    }
`;

const StyledLine = styled.div`
    background: rgb(233, 236, 239);
    width: 100%;
    height: 1px;
    margin-top: 1rem;
    margin-bottom: 1rem;
`;

const StyledSNS = styled.div`
    display: flex;
    font-size: 25px;
    color: rgb(134, 142, 150);
    margin-bottom: 0.5rem;

    a {
        cursor: pointer;
    }

    a + a {
        margin-left: 15px;
    }

    a:hover {
        color: black;
    }
`;

const StyledDiv = styled.div`
    background: rgb(241, 243, 245);
    height: 15px;
    width: 100%;
    box-shadow: rgb(0 0 0 / 4%) 0px 8px 8px -8px inset,
        rgb(0 0 0 / 4%) 0px -8px 8px -8px inset;
`;
