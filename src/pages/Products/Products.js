import React, { useEffect, useState } from "react";
import CardComponents from "../../components/Card.components";
import { getProductsAPI } from "../../API/ProductAPI";
import { NavLink as BaseNavLink } from "react-router-dom";

import styled from "@emotion/styled";
import ButtonComponents from "../../components/Button.components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 40px;
`;

const WrapperBtn = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const BtnCreateProd = styled(BaseNavLink)`
  padding: 8px 13px;
  border: none;
  outline: none;
  background: #fb6b03;
  border-radius: 10px;
  color: white;

  &:hover {
    color: white;
  }
`;

const Products = () => {
  const [dataProduct, setDataProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getProductsAPI();
      console.log(res);
      setDataProduct(res);
    };
    fetchData();
  }, [setDataProduct]);
  return (
    <div>
      <WrapperBtn>
        <ButtonComponents title="All Program" />
        <ButtonComponents title="UI/UX Design" />
        <ButtonComponents title="Product Management" />
        <ButtonComponents title="Branding Design" />
        <ButtonComponents title="Mobile Development" />
        <ButtonComponents title="Web Development" />
      </WrapperBtn>
      <div style={{ padding: "20px 0" }}>
        <BtnCreateProd to="/product/add">Create Product</BtnCreateProd>
      </div>

      <Wrapper>
        {dataProduct.map((item) => (
          <div key={item.id}>
            <CardComponents
              setData={setDataProduct}
              data={dataProduct}
              price={item.price}
              id={item.id}
              days={item.days_period}
              title={item.name}
              description={item.description}
            />
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default Products;
