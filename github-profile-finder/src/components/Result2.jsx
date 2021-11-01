import React from "react";
import PendingResult from "./PendingResult";
import RejectedResult from "./RejectedResult";
import Result from "./Result";

const Result2 = ({ userInfo, setUserInfo }) => {
    // status에 따라 보여줄 화면을 정의
    switch (userInfo.status) {
        case "pending":
            return <PendingResult />;
        case "resolved":
            return (
                <Result userInfo={userInfo.data} setUserInfo={setUserInfo} />
            );
        case "rejected":
            return <RejectedResult />;
        default:
            return <></>;
    }
};

export default Result2;
