import React, { useEffect, useState } from "react";
import CardComponents from "components/Card.components";
import { getProductsAPI } from "API/ProductAPI";

import styled from "@emotion/styled";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  align-items: center;
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
  }, []);
  return (
    <div>
      <Wrapper>
        {dataProduct.map((item) => (
          <div key={item.id}>
            <CardComponents
              price={item.price}
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
