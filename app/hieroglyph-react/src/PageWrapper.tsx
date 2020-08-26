import React, { FC } from "react";
import styled from "styled-components/macro";

type PageWrapperProps = {
  pageName?: "page1" | "hieroglyph" | "maya";
};

const DivPage1 = styled.div`
  min-height: 38em;
  background-color: #e0bb6e;
`;

const Div = styled.div`
  text-align: center;
  min-height: 38em;
`;

const PageWrapper: FC<PageWrapperProps> = ({ pageName, children }) => {
  return (
    <main id="main">
      {pageName === "page1" ? (
        <DivPage1 children={children} />
      ) : (
        <Div children={children} />
      )}
    </main>
  );
};

export default PageWrapper;
