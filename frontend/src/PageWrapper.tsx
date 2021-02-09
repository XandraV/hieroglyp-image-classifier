import React, { FC } from "react";
import styled from "styled-components/macro";

const StyledWrapper = styled.div`
  margin: 4rem;
  text-align: center;
  color: white;
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledWrapper children={children} />;
};

export default PageWrapper;
