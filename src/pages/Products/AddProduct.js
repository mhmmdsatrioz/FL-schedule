import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 77vh;
  .add-product {
    width: 55%;
    height: 50vh;
    padding: 15px;
    background: white;
  }

  .title {
    color: #23a6f0;
    font-size: 24px;
    text-align: center;
    font-weight: bold;
  }

  .wrapperText {
    display: flex;
    flex-direction: column;
    gap: 15px;

    h1 {
      font-size: 16px;
      padding: 0;
      margin: 0;
      &::after {
        color: red;
        content: "*";
      }
    }
    input {
      width: 100%;
      border-radius: 5px;
      height: 2rem;
      border: 2px solid #cbccd5;
      padding: 0 10px;

      &:placeholder {
        color: black;
      }
    }
  }
`;

const Button = styled.button`
  border: none;
  margin-top: 15px;
  outline: none;
  padding: 12px 30px;
  color: white;
  background: #fb6b03;
  border-radius: 10px;
  font-size: 15px;
  font-weight: bold;
`;
const AddProduct = () => {
  return (
    <Wrapper>
      <div className="add-product">
        <h1 className="title">Koding Departement</h1>

        <div className="wrapperText">
          <div>
            <h1>Name Product</h1>
            <input placeholder="Name Product" />
          </div>

          <div>
            <h1>Description</h1>
            <input placeholder="Name Product" />
          </div>

          <div>
            <h1>Price</h1>
            <input placeholder="Name Product" />
          </div>
        </div>
        <Button>Save</Button>
      </div>
    </Wrapper>
  );
};

export default AddProduct;
