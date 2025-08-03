import { useEffect, useState, useContext } from "react";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";

export default function Home() {
  const { theme } = useContext(ThemeContext);
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <Container
      className={`${theme.classes.layout} py-5`}
      style={{ paddingTop: "80px", fontFamily: theme.fontFamily }}
    >
      <h2 className="my-4 text-center">Welcome to {theme.name}</h2>

      {loading ? (
        <div className="text-center my-5">
          <Spinner
            animation="border"
            variant={
              theme.classes.body.includes("text-dark") ? "dark" : "light"
            }
          />
        </div>
      ) : (
        <Row>
          {products.map((p) => (
            <Col md={4} lg={3} sm={6} xs={12} key={p.id} className="mb-4">
              <Card className={`h-100 shadow ${theme.classes.body}`}>
                <Card.Img
                  variant="top"
                  src={p.image}
                  alt={p.title}
                  style={{
                    height: "200px",
                    objectFit: "contain",
                    padding: "10px",
                  }}
                />
                <Card.Body>
                  <Card.Title className="fs-6">{p.title}</Card.Title>
                  <Card.Text className="fw-bold">${p.price}</Card.Text>
                  <Button className={theme.classes.button} size="sm">
                    Buy Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
}
