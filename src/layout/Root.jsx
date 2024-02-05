
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <Container>

            <Outlet></Outlet>

        </Container>
    );
};

export default Root;