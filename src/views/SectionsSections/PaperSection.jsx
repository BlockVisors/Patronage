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
  CardFooter,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Pagination,
  PaginationItem,
  PaginationLink,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class PaperSection extends React.Component {
  state = {
    activeTab: "1"
  };
  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  };
  render() {
    return (
      <>
        <div className="cd-section" id="projects">
         
    
          {/* ********* PROJECTS 4 ********* */}
          <div className="projects-4" id="paper-section">
            <Container>
              <Row>
                <Col className="mr-auto ml-auto text-center" md="8">
                  <h6 className="category text-muted">LEARN ABOUT OUR PLATFORM</h6>
                  <h2 className="title mt-0">
                   WhitePapers and Presentations
                  </h2>
                </Col>
              </Row>
              <div className="space-50" />
              <Row>
                <Col lg="4">
                  <Card
                    className="card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg8.jpg") + ")"
                    }}
                  >
                    <CardBody className="text-left">
                      <h6 className="card-category">
                        <i className="tim-icons icon-atom" />
                      </h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h1">REALX WhitePaper</CardTitle>
                      </a>
                      <h6 className="desc">RealX Overview</h6>
                      <Button
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Watch Later
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card
                    className="card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg7.jpg") + ")"
                    }}
                  >
                    <CardBody className="text-left">
                      <h6 className="card-category">
                        <i className="tim-icons icon-camera-18" />
                      </h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h1">Token Paper</CardTitle>
                      </a>
                      <h6 className="desc">Our Token Ecosystem</h6>
                      <Button
                        color="success"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Watch Later
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="4">
                  <Card
                    className="card-background"
                    style={{
                      backgroundImage:
                        "url(" + require("assets/img/bg4.jpg") + ")"
                    }}
                  >
                    <CardBody className="text-left">
                      <h6 className="card-category">
                        <i className="tim-icons icon-html5" />
                      </h6>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <CardTitle tag="h1">Business Paper</CardTitle>
                      </a>
                      <h6 className="desc">Our Business Model</h6>
                      <Button
                        color="warning"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        Watch Later
                      </Button>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END PROJECTS 4 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default PaperSection;
