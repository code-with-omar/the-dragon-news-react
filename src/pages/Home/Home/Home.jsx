import { Card, Col, Row, } from 'react-bootstrap';
import Header from '../../Shared/Header/Header.jsx'
import LeftNav from '../../Shared/LeftNav/LeftNav.jsx';
import RightNav from '../../Shared/RightNav/RightNav.jsx';
import Footer from '../../Shared/Footer/Footer.jsx';
import BrakingNews from './BrakingNews.jsx';
import UserNavBar from '../../Shared/UserNavBar/UserNavBar.jsx';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BrakingNews></BrakingNews>
      <UserNavBar></UserNavBar>
      <Row className="mt-5">

        <Col lg={3} className="g-4">
          <Card className='border-0'>
            <LeftNav></LeftNav>
          </Card>
        </Col>
        <Col lg={6} className="g-4">
          <Card className='border-0'>
            Main Contain
          </Card>
        </Col>
        <Col lg={3} className="g-4">
          <Card className='border-0'>
            <RightNav></RightNav>
          </Card>
        </Col>

      </Row>


      <Footer></Footer>
    </div>
  );
};

export default Home;