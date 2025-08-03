import { useContext } from "react";
import { Container, Form, Button, Card } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";

export default function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="mt-5">
      <Container
        className={`${theme.classes.layout} py-5`}
        style={{
          paddingTop: "80px",
          fontFamily: theme.fontFamily,
        }}
      >
        <Card
          className={`p-4 shadow ${theme.classes.body}`}
          style={{ maxWidth: "500px", margin: "0 auto" }}
        >
          <h2 className="mb-4 text-center">Contact Us</h2>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                required
                className={theme.classes.body}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                required
                className={theme.classes.body}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Type your message"
                required
                className={theme.classes.body}
              />
            </Form.Group>

            <div className="text-center">
              <Button type="submit" className={theme.classes.button}>
                Send
              </Button>
            </div>
          </Form>
        </Card>
      </Container>
    </div>
  );
}
