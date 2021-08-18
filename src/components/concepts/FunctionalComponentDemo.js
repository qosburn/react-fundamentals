import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';

const FunctionalComponentDemo = function () {
  return (
    <Container className="main">
      <Row>
        <Col xs="12">
          <h1>Functional Component</h1>
          <p>
            Functional components are the primary tool in React to build a
            small, modular piece of your page..
          </p>
          <dl>
            <dt>Can use state</dt>
            <dd>
              With the 'useState' hook, functional components can now both
              render a display to the page and update the information to be
              shown.
            </dd>
            <dt>No 'this' Keyword</dt>
            <dd>
              Older class components use 'this', functional components have no
              'this' object.
            </dd>
            <dt>Can use effects</dt>
            <dd>
              With the 'useEffect' hook, functional components can perform side
              effects with any props or state changes
            </dd>
            <dt>return()</dt>
            <dd>
              Must return a single element, but this element may have nested
              elements inside
            </dd>
          </dl>
        </Col>
      </Row>

      <hr />
      <h1>Challenge</h1>
      <Row>
        <Col md="6">
          <HelloWorldFatArrow className="logo" />
        </Col>
        <Col md="6">
          <HellowWorld />
        </Col>
      </Row>
    </Container>
  );
};
export default FunctionalComponentDemo;

const HellowWorld = function () {
  return (
    <div>
      <Card>
        <img
          width="100%"
          height="280px"
          src="https://d32myzxfxyl12w.cloudfront.net/images/blog_images/903ce20a27ef8f381e6387b7dacb9f43af34616b.png?1553522668"
          alt="Card Cap"
        />
        <CardBody>
          <CardTitle>Regular Ole Function</CardTitle>
          <CardSubtitle>A JS Library</CardSubtitle>
          <CardText>
            <pre>Const HellowWorld= function () </pre>
          </CardText>
          <Button>Go somwhere man</Button>
        </CardBody>
      </Card>
    </div>
  );
};
//Fat Arrow Functional Component - 3 fewer lines. Common in React...
const HelloWorldFatArrow = () => (
  <div>
    <Card>
      <img
        width="100%"
        height="280px"
        src="https://www.ghibli.jp/images/baron.jpg"
        alt="Card cap2"
      />
      <CardBody>
        <CardTitle>Regular Ole Function</CardTitle>
        <CardSubtitle>A JS Library</CardSubtitle>
        <CardText>
          <pre>Const HellowWorld= function () </pre>
        </CardText>
        <Button>Go somwhere man1</Button>
      </CardBody>
    </Card>
  </div>
);
