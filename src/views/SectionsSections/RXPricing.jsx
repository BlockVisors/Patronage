/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

class Pricing extends React.Component {
  state = {
    firstTabs: "1",
    secondTabs: "2",
    thirdTabs: "1"
  };
  toggle = (tabName, tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        [tabName]: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="pricing">
         
         
          {/* ********* PRICING 5 ********* */}
          <div className="pricing-5" id="pricing-5">
            <div className="space-50" />
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title">Pick the best plan for you</h2>
                  <h4 className="description">
                    You have Free Unlimited Updates and Premium Support on each
                    package.
                  </h4>
                  <div className="section-space" />
                </Col>
              </Row>
              <div className="space-50" />
              <Row>
                <Col md="3">
                  <Card className="card-pricing card-plain card-primary">
                    <CardBody>
                      <h2 className="title">Free</h2>
                      <h5 className="description">
                        $0.00 <small>/Monthly</small>
                      </h5>
                      <ul>
                        <li>1 GB of space</li>
                        <li>Limited Support</li>
                        <li>Support at $25/hour</li>
                        <li>Limited cloud access</li>
                      </ul>
                      <Button
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose plan
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-pricing card-plain card-primary">
                    <CardBody>
                      <h2 className="title">
                        Premium <Badge color="warning">Best choice</Badge>
                      </h2>
                      <h5 className="description">
                        $8.99 <small>/Monthly</small>
                      </h5>
                      <ul>
                        <li>5 GB of space</li>
                        <li>UnLimited Support</li>
                        <li>Unlimited Downloads</li>
                        <li>Full cloud access</li>
                      </ul>
                      <Button
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose plan
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-pricing card-plain card-primary">
                    <CardBody>
                      <h2 className="title">Exclusive</h2>
                      <h5 className="description">
                        $13.99 <small>/Monthly</small>
                      </h5>
                      <ul>
                        <li>5 GB of space</li>
                        <li>UnLimited Support</li>
                        <li>Unlimited Downloads</li>
                        <li>Full cloud access</li>
                      </ul>
                      <Button
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose plan
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="3">
                  <Card className="card-pricing card-plain card-primary">
                    <CardBody>
                      <h2 className="title">Exclusive</h2>
                      <h5 className="description">
                        $13.99 <small>/Monthly</small>
                      </h5>
                      <ul>
                        <li>5 GB of space</li>
                        <li>UnLimited Support</li>
                        <li>Unlimited Downloads</li>
                        <li>Full cloud access</li>
                      </ul>
                      <Button
                        className="btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Choose plan
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END PRICING 5 ********* */}
        </div>
      </>
    );
  }
}

export default Pricing;
