import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <>
            <Navbar bg="danger" variant="danger">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-start">
                        <Link to="/" className="text-white ms-3 text-decoration-none">🏠 Home</Link>
                        <Link to="/contacto" className="text-white ms-3 text-decoration-none">📒 Contacto</Link>
                    </Navbar.Collapse>
                    <Navbar.Brand style={{ color: "Grey" }}>Happy Cake</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}