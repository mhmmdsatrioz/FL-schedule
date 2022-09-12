import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78vh;

  .card-notes {
    width: 45%;
    height: auto;
    background-color: white;
    border-radius: 10px;
    padding: 10px 20px;

    .title-notes {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
    }
  }

  .wrapper-input {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
      font-size: 15px;
      font-weight: bold;
      padding: 0;
      margin: 0;

      &:after {
        color: red;
        content: "*";
      }
    }
    input {
      width: 100%;
      border: none;
      outline: none;
      border-radius: 5px;
      padding: 0 5px;
      height: 32px;
      background: #dfdada;
      &::placeholder {
        display: none;
      }
    }
  }
`;

const Button = styled.button`
  outline: None;
  padding: 3px 25px;
  border-radius: 2px;
  border: none;
  display: block;
  margin: auto;
`;

const AddNotes = () => {
  return (
    <Wrapper>
      <div className="card-notes">
        <h1 className="title-notes">Create Notes</h1>

        <div className="wrapper-input">
          <div>
            <h1 className="">Title</h1>
            <input placeholder="Title" />
          </div>

          <div>
            <h1 className="">Description</h1>
            <input placeholder="Description" />
          </div>

          <div>
            <h1 className="">Receiver</h1>
            <input placeholder="Receiver" />
          </div>

          <div>
            <h1 className="">Author</h1>
            <input placeholder="Author" />
          </div>
          <Button>Save</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddNotes;
