import React, { useCallback, useState } from "react";
import axios from "axios";
import NewsItem from "./components/NewsItem";
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";
// import NewsList from "./components/NewsList";

function App() {
    const [category, setCategory] = useState("all");
    const onSelect = useCallback((category) => setCategory(category), []);

    // const [data, setData] = useState(null);
    // const onClick = () => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/todos/1")
    //         .then((responce) => setData(responce));
    // };

    //onClick을 이렇게 바꿀 수 있음.
    // const onClick = async () => {
    //     try {
    //         const responce = await axios.get(
    //             "https://jsonplaceholder.typicode.com/todos/1",
    //         );
    //         setData(responce);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    // 뉴스 api 받아오기.
    // const onClick = async () => {
    //     try {
    //         const responce = await axios.get(
    //             "https://newsapi.org/v2/top-headlines?country=kr&apiKey=3c2d9c10238142d2a35732f809526641",
    //         );
    //         setData(responce);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <div>
            {/* <div>
                <button onClick={onClick}>불러오기</button>
            </div>
            {data && (
                <textarea
                    rows={7}
                    value={JSON.stringify(data, null, 2)}
                    readOnly={true}
                />
            )}{" "} */}
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />
        </div>
    );
}
export default App;
