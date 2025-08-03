import { useContext } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";

export default function About() {
  const { theme } = useContext(ThemeContext);

  return (
    <Container
      className={`${theme.classes.layout} py-5 mt-5`}
      style={{ paddingTop: "80px", fontFamily: theme.fontFamily }}
    >
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className={`shadow ${theme.classes.body}`}>
            <Card.Body>
              <Card.Title as="h2" className="mb-4">
                About Us
              </Card.Title>
              <Card.Text>
                Welcome to <strong>Multi-Theme App</strong>! This app
                demonstrates switching between multiple layouts and styles
                dynamically using React, Bootstrap, and TypeScript.
              </Card.Text>
              <Card.Text>
                Each theme changes colors, fonts, spacing, and even the overall
                layout. The theme persists using <code>localStorage</code> so
                your choice is saved.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
