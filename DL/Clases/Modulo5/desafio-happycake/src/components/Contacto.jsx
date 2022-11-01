import { Button, Form } from 'react-bootstrap';

function Contacto() {
    return (
        <div>
            <h1 className="text-center">Cuentanos, ¿en que te podemos ayudar?</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="danger" type="submit">
                    Enviar
                </Button>
            </Form>
        </div>

    )
}

export default Contacto;