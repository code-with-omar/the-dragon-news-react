import { Button } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const BrakingNews = () => {
    return (
        <div className="d-flex latest-news-section bg-dark-07">
                <Button className="button bg-pink me-1">Latest</Button>
                <Marquee speed={100} className="dark-02 fs-18 fw-600">
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
    );
};

export default BrakingNews;