
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
                  <Card title="Notre entreprise à votre service" bordered={false}>
                    Bienvenue sur votre site pour déclarer vos avis de passage et laisser des commentaires.
                    En ligne 24/24, 7 jours sur 7.
                  </Card>
                </Col>
                <Col md={8} sm={16}>
                  <Card title="Des relations clients durables" bordered={false}>
                    Nous prenons nos clients en considération et nous vous laissons à disposition une application
                    simple et réactive.
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
