import { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import { ThemeContext } from "../../context/ThemeContext";
import { theme1 } from "../../theme/theme1";
import { theme2 } from "../../theme/theme2";
import { theme3 } from "../../theme/theme3";

export default function Header() {
  const { setTheme, theme } = useContext(ThemeContext);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case "Theme 1":
        setTheme(theme1);
        break;
      case "Theme 2":
        setTheme(theme2);
        break;
      case "Theme 3":
        setTheme(theme3);
        break;
    }
  };

  return (
    <Navbar
      expand="lg"
      className={`${theme.classes.header} shadow`}
      fixed="top"
      style={{ fontFamily: theme.fontFamily }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold">
          Multi-Theme App
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="text-white">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-white">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-white">
              Contact
            </Nav.Link>
          </Nav>
          <Form.Select
            value={theme.name}
            onChange={handleThemeChange}
            size="sm"
            className="ms-md-3"
            style={{ width: "150px" }}
          >
            <option>Theme 1</option>
            <option>Theme 2</option>
            <option>Theme 3</option>
          </Form.Select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
