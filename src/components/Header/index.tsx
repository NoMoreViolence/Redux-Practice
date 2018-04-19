import * as React from 'react';
import { Row, Col } from 'reactstrap';

interface Props {
  result: boolean;
  onLoad: () => void;
  onResponse: () => void;
  onError: () => void;
}

const HeaderPage = ({ result, onLoad, onResponse, onError }: Props) => {
  return (
    <Row>
      <Col>
        <button>{result.toString()}</button>
      </Col>
      <Col>
        <button onClick={onLoad}>+</button>
      </Col>
      <Col>
        <button onClick={onResponse}>==</button>
      </Col>
      <Col>
        <button onClick={onError}>--</button>
      </Col>
    </Row>
  );
};

export default HeaderPage;
