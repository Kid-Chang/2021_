import Book from "./Book";
import styled from "styled-components";
const BookGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

function BookList(params) {
  console.log(params.params);
  const books = params.params;
  return (
    <BookGridBox>
      {books.map((book) => (
        <Book params={book} key={book.isbn} />
      ))}
    </BookGridBox>
  );
}

export default BookList;
