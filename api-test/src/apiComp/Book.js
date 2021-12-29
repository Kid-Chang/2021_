import styled from "styled-components";
const BookBox = styled.div`
  border: 1px solid black;
  display: flex;
  margin: 10px;
  //   background-color: black;
`;
const BookDesc = styled.div`
  margin: 20px 0 20px 20px;
  position: relative;
  width: 13vw;
`;
function Book({ params }) {
  return (
    <>
      <BookBox>
        <a href={params.url} target="_blank" rel="noreferrer">
          <img src={params.thumbnail} alt="" />
        </a>
        <BookDesc>
          <div
            className="title"
            style={{
              fontSize: "1rem",
              fontWeight: "600",
            }}
          >
            {params.title}
          </div>
          <div style={{ position: "absolute", bottom: "0" }}>
            가격: {params.price}원<br />
            작가:{params.authors}
          </div>
        </BookDesc>
      </BookBox>
    </>
  );
}

export default Book;
