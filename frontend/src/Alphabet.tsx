import React, { FC } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components/macro";

const baseURL =
  "https://hieroglyphidentifier.s3.eu-west-2.amazonaws.com/letter-";

const letters = [
  ["a", "b", "b2", "c", "d", "e"],
  ["f", "g", "h", "h2", "i", "j"],
  ["k", "l", "m", "n", "n2", "o"],
  ["p", "q", "r", "s", "t", "t2"],
  ["u", "v", "w", "x", "y", "z"],
];

const Alphabet: FC = () => {
  return (
    <div>
      {letters.map((row) => (
        <Row className="pt-2">
          {row.map((l) => (
            <Col className="p-0">
              <img width={60} src={`${baseURL}${l}.jpg`} />
            </Col>
          ))}
        </Row>
      ))}
    </div>
  );
};

export default Alphabet;
