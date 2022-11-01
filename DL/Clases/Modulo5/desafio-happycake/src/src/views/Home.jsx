import { Container } from "react-bootstrap";

export default () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Bienvenido a <span><strong>Happy Cake</strong></span>
            </h1>
            <h6>El lugar de los pasteles felices</h6>
            <div className="fs-1">🎂</div>
        </Container>
    );
};