import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-top: 70px;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  background-color: coral;
  opacity: .9;
  color: white;
  height: auto;

  button {
    border-radius: 0 0 20px 20px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    background-color: white;
  }

  img {

    max-height: 200px;
    object-fit: cover;
    border-radius: 20px 20px 0 0;
  }

  div {

    font-family: font-family: 'Poppins', sans-serif;;
    padding: 1rem;
    height: 50%;
  }
`;