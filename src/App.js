
import './sass/main.scss';
import Header from './components/Header';

import { Card, Col, Row } from 'antd';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="main">
        <div className="home">
          <div className="container">
            <div className="wrappers">
              <Row gutter={16}>
                <Col md={8} sm={16}>
                  <Card title="Expert dans le domaine" bordered={false}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ligula tempor, mollis lectus eget, consectetur est. Sed diam lacus, fermentum vel sem sit amet, maximus iaculis purus. Proin in leo non lacus fringilla mattis eu eget mauris. Donec imperdiet tortor pulvinar gravida vulputate. Curabitur ullamcorper porta diam, ac feugiat erat sodales auctor. Proin id tellus euismod lacus pretium feugiat. Vivamus libero mi, ullamcorper vel sapien vitae, rhoncus orna
                  </Card>
                </Col>
                <Col md={8} sm={16}>
                  <Card title="Des relations clients durables" bordered={false}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ligula tempor, mollis lectus eget, consectetur est. Sed diam lacus, fermentum vel sem sit amet, maximus iaculis purus. Proin in leo non lacus fringilla mattis eu eget mauris. Donec imperdiet tortor pulvinar gravida vulputate. Curabitur ullamcorper porta diam, ac feugiat erat sodales auctor. Proin id tellus euismod lacus pretium feugiat. Vivamus libero mi, ullamcorper vel sapien vitae, rhoncus orna
                  </Card>
                </Col>
                <Col md={8} sm={16}>
                  <Card title="Produits venant de la culture bio" bordered={false}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu ligula tempor, mollis lectus eget, consectetur est. Sed diam lacus, fermentum vel sem sit amet, maximus iaculis purus. Proin in leo non lacus fringilla mattis eu eget mauris. Donec imperdiet tortor pulvinar gravida vulputate. Curabitur ullamcorper porta diam, ac feugiat erat sodales auctor. Proin id tellus euismod lacus pretium feugiat. Vivamus libero mi, ullamcorper vel sapien vitae, rhoncus ornas
                  </Card>
                </Col>
              </Row>
            </div>
          </div></div>
      </div>
    </div>
  );
}

export default App;
