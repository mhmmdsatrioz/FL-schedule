import React from "react";
import styled from "@emotion/styled";

import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { WiTime4 } from "react-icons/wi";
import { ConfirmAlert } from "./ConfirmAlert.components";
import { deleteProductAPI } from "API/ProductAPI";

const Card = styled.div`
  width: 290px;
  height: 265px;
  padding: 15px;
  position: relative;
  border-radius: 10px;
  background-color: #ffffff;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  h1 {
    color: #23a6f0;
    cursor: pointer;
    font-weight: 700;
    font-size: 18px;
  }
  h2 {
    font-size: 16px;
    font-weight: medium;
  }
  p {
    color: #737373;
    font-weight: 400;
    font-size: 15px;
  }

  .wrapper-price {
    display: flex;
    gap: 3px;
  }

  .wrapper-price .prices {
    color: #bdbdbd;
    font-weight: 700;
    font-size: 16px;
  }

  .wrapper-price .discount {
    color: #40bb15;
    font-weight: 700;
    font-size: 16px;
  }

  .wrapper-time {
    position: absolute;
    // padding-top: 8px;
    bottom: 40px;
    display: flex;
    gap: 25px;
    // justify-content: space-around;
    align-items: center;

    .time-icons {
      display: flex;

      align-items: center;

      p {
        font-size: 14px;
        color: red;
        padding: 0;
        margin: 0;
      }
    }

    .units {
      p {
        font-size: 14px;
        padding: 0;
        margin: 0;
      }
    }
  }
`;

const Footer = styled.div`
  text-align: right;
  position: absolute;
  bottom: 15px;
  right: 15px;
  .edit {
    cursor: pointer;
  }

  .delete {
    cursor: pointer;
    &:hover {
      color: red;
    }
  }
`;

const CardComponents = ({ title, description, subTitle, id, price, days, data, setData }) => {
  const handleDelete = async (id) => {
    const title = "Are you sure?";
    const text = "Once deleted, you will not be able to recover this file!";
    const isSuccess = "Poof! Your product file has been deleted";
    ConfirmAlert({ title, text, isSuccess, deleteProductAPI, id, setData, data });
  };

  return (
    <Card>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>

      <p>{description.split(1, 10) + "..."}</p>

      <div className="wrapper-price">
        <h1 className="prices">500.000</h1>
        <h1 className="discount">{price}</h1>
      </div>

      <div className="wrapper-time">
        <div className="time-icons">
          <WiTime4 color=" #23A6F0" />
          <p>{days} days</p>
        </div>

        <div className="units">
          {/* <WiTime4 color=" #23A6F0" /> */}
          <p>63 Unit </p>
        </div>
      </div>

      <Footer>
        <BiEdit className="edit" size={20} />
        <RiDeleteBin6Line onClick={() => handleDelete(id)} className="delete" size={20} />
      </Footer>
    </Card>
  );
};

export default CardComponents;
