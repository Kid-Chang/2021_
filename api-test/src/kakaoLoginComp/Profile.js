import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const InfoForm = styled.div`
    // border: 1px solid black;
    width: 300px;
    // display: gird;
    margin-left: calc(50% - 150px);
    justify-items: center;
    & > div {
        background-color: yellow;
        width: 60%;
        height: 200px;
        margin: auto;
    }
`;
function Profile() {
    const [user_id, setUserId] = useState();
    const [nickName, setNickName] = useState();
    const [profileImage, setProfileImage] = useState();
    const navigate = useNavigate();
    const [logouting, setLogouting] = useState(false);

    const getProfile = async () => {
        try {
            // Kakao SDK API를 이용해 사용자 정보 획득
            let data = await window.Kakao.API.request({
                url: "/v2/user/me",
            });
            // 사용자 정보 변수에 저장
            console.log(data);

            setUserId(data.id);
            setNickName(data.properties.nickname);
            setProfileImage(data.properties.thumbnail_image);
        } catch (err) {
            console.log(err);
        }
    };

    const Logout = async () => {
        try {
            let data = await window.Kakao.API.request({
                url: "/v1/user/logout",
            });
            console.log(data);
            setUserId();
            setNickName();
            setProfileImage();
            setLogouting(true);
            setTimeout(() => {
                navigate("/");
            }, 3000);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getProfile();
    }, []);
    return (
        <div>
            <InfoForm className={user_id}>
                <div>
                    {/* <h2>{user_id}</h2> */}
                    <button onClick={Logout}> 로그아웃 하기.</button>
                    <h2 style={{ margin: "5px" }}>{nickName}</h2>
                    <img src={profileImage} alt=""></img>
                    {logouting ? <div>logout.....</div> : null}
                </div>
            </InfoForm>
        </div>
    );
}
export default Profile;
