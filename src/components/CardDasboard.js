import React from "react";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 190px;
  border-radius: 10px;
  padding: 5px;
  height: 80px;
  background: #eefdfe;

  .UID {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      padding: 0;
      margin: 0;
      font-size: 20px;
    }

    p {
      padding: 0;
      margin: 0;
    }
  }
`;

const CardDasboard = ({ title, value }) => {
  return (
    <Wrapper>
      <div className="UID">
        <h1>{title}</h1>
        <p>{value}</p>
      </div>
    </Wrapper>
  );
};

export default CardDasboard;
