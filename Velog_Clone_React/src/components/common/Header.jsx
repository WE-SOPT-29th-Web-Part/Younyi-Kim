import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ArrowDropDownImage } from '../../assets/icons/arrow-down.svg';
import { ReactComponent as VelogIcon } from '../../assets/icons/velog-icon.svg';

const Header = () => {
    return (
        <StyledHeader>
            <StyledLeft>
                <VelogIcon />
                <p>gokuku.log</p>
            </StyledLeft>
            <StyledRight>
                <Link to='/write'>
                    <button>새 글 작성</button>
                </Link>
                <div>
                    <img
                        src='https://media.vlpt.us/images/younyikim/profile/b4c2c97c-ca03-425f-811d-f5dc0de5e936/KakaoTalk_20210826_220638015_01.jpg?w=120'
                        alt=''
                        className='header__item-profile'
                    />
                </div>
                <button>
                    <ArrowDropDownImage fill='black' />
                </button>
            </StyledRight>
        </StyledHeader>
    );
};

export default Header;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    height: 60px;
    width: calc(100% - 2rem);
`;

const StyledLeft = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    a {
        display: flex;
        align-items: center;
        -webkit-box-align: center;
        font-size: 20px;
        font-weight: bold;
        margin-left: 10px;
    }

    &:hover svg {
        fill: rgb(32, 201, 151);
    }
`;

const StyledRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    button {
        cursor: pointer;
        border: 0;
        outline: 0;
        background-color: inherit;
    }

    &:hover svg {
        fill: rgb(32, 201, 151);
    }
    a button {
        height: 30px;
        padding-left: 15px;
        padding-right: 15px;
        font-size: 15px;
        font-weight: bold;
        border: 1px solid rgb(52, 58, 64);
        border-radius: 15px;
        color: rgb(52, 58, 64);
        background-color: #fff;
        margin-right: 10px;

        &:hover {
            color: #fff;
            background-color: rgb(52, 58, 64);
        }
    }

    div img {
        display: block;
        height: 37.5px;
        width: 37.5px;
        border-radius: 50%;
        box-shadow: rgb(0 0 0 / 9%) 0px 0px 8px;
    }
`;
