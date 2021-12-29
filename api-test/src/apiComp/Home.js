import { useState, useEffect } from "react";
import { bookSearch } from "../searchApi/booksearch";
import Book from "./Book";
import BookList from "./BookList";

function Home() {
    const [books, setBooks] = useState([]);
    const [query, setQuery] = useState("");
    const [text, setText] = useState("");
    const [typingEnd, setTypingEnd] = useState(false);
    // 책 검색
    useEffect(() => {
        if (query.length > 0) {
            bookSearchHttpHandler(query, true); // 컴포넌트 마운트 후에, 함수를 호출한다.
        }
    }, [query]);
    // 엔터를 눌렀을 때 호출되는 함수

    // book search 핸들러
    const bookSearchHttpHandler = async (query, reset) => {
        // Parameter 설정
        const params = {
            query: query,
            sort: "accuracy", // accuracy | recency 정확도 or 최신
            page: 1, // 페이지번호
            size: 10, // 한 페이지에 보여 질 문서의 개수
        };

        const { data } = await bookSearch(params); // api 호출

        if (reset) {
            setBooks(data.documents);
            // console.log(books[0]);
        } else {
            setBooks(books.concat(data.documents));
        }
        console.log(books);
        listUpBooks(books);
        setTypingEnd(true);
    };

    const listUpBooks = (params) => {
        params.forEach((element) => {
            // console.log(element);
        });
    };
    const searchBook = (text) => {
        setQuery(text);
    };
    const onTextUpdate = (e) => {
        setText(e.target.value);
    };
    const onEnter = (e) => {
        if (e.keyCode === 13) {
            searchBook(text);
        }
    };

    return (
        <div>
            <div
                className="searchNav"
                style={{ width: "100%", display: "table" }}
            >
                <input
                    type="search"
                    placeholder="검색어를 입력해 주세요."
                    name="query"
                    onKeyDown={onEnter} // enter
                    onChange={onTextUpdate} // change
                    value={text} // view
                    className="input_search"
                    style={{
                        width: "200px",
                        marginLeft: "calc(50% - 100px)",
                        marginTop: "30px",
                    }}
                />
                {typingEnd === true ? <BookList params={books} /> : null}
            </div>
        </div>
    );
}
// {books.map(book => (
//   <Book title={book.title} key={book.isbn}/>
// ))}
export default Home;
