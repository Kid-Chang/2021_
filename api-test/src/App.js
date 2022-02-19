// import Auth from "./kakaoLoginComp/Auth";
// import Profile from "./kakaoLoginComp/Profile";
// import LoginMain from "./kakaoLoginComp/LoginMain";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import TestPage from "./testpage";

// function App() {
//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/" element={<TestPage />} />
//                     {/* <Route path="/" element={<LoginMain />} />
//                     <Route path="/oauth/kakao/callback" element={<Auth />} />
//                     <Route path="/profile" element={<Profile />} /> */}
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }
// export default App;

import { memo, useCallback, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Item from "./Item";
import Loader from "./loader";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
}
body {
    background-color: #f2f5f7;
}
`;

const AppWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;

    .Target-Element {
        width: 100vw;
        height: 140px;
        display: flex;
        justify-content: center;
        text-align: center;
        align-items: center;
    }
`;

const App = () => {
    const [target, setTarget] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [itemLists, setItemLists] = useState([1]);

    useEffect(() => {
        console.log(itemLists);
    }, [itemLists]);

    const getMoreItem = async () => {
        setIsLoaded(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));

        let Items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        setItemLists((itemLists) => itemLists.concat(Items));
        setIsLoaded(false);
    };

    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !isLoaded) {
            observer.unobserve(entry.target);
            await getMoreItem();
            observer.observe(entry.target);
        }
    };

    useEffect(() => {
        let observer;
        if (target) {
            observer = new IntersectionObserver(onIntersect, {
                threshold: 0.4,
            });
            observer.observe(target);
        }
        return () => observer && observer.disconnect();
    }, [target]);

    return (
        <>
            <GlobalStyle />
            <AppWrap>
                {itemLists.map((v, i) => {
                    return <Item number={i + 1} key={i} />;
                })}
                <div ref={setTarget} className="Target-Element">
                    {/* {isLoaded && <Loader />} */}
                </div>
            </AppWrap>
            <div></div>
        </>
    );
};

export default memo(App);
