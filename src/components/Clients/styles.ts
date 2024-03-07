import styled from "styled-components";

export const Container = styled.section`
  width: 85%;

  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TableContainer = styled.div`
  width: 95%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
  align-self: center;

  background-color: yellow;
`;

export const TableCell = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid black;
  background-color: green;
`;

// export const TableContainer = styled.div`
//   width: 90%;
//   height: 100%;

//   display: flex;
//   align-self: center;
//   flex-direction: column;
//   gap: 20px;

//   background-color: red;
// `;

// export const TableHeader = styled.div`
//   width: 100%;

//   padding: 10px 0;

//   display: flex;
//   flex-direction: row;
//   gap: 5px;

//   background-color: pink;
// `;

// export const TableRow = styled.div`
//   width: 100%;
//   height: 100px;

//   display: flex;
//   flex-direction: row;
//   gap: 5px;

//   background-color: yellow;
// `;

// export const TableColumn = styled.div`
//   height: 100%;

//   display: flex;
//   flex: 1;
//   align-items: center;
//   justify-content: center;
//   gap: 5px;

//   background-color: green;
// `;