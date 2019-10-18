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

class Projects extends React.Component {
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
         
         
          {/* ********* PROJECTS 3 ********* */}
          <div className="projects-3">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto text-center mb-5" md="8">
                  <h6 className="category text-muted">Our work</h6>
                  <h2 className="title mt-0">
                    REALX Target Projects -
                  </h2>
                </Col>
              </Row>
              <div className="space-50" />
              <Row>
                <Col md="6">
                  <Card className="card-blog card-plain">
                    <CardHeader>
                      <h2 className="title">Hotels & Resorts</h2>
                      <Badge color="danger" className="mr-1">
                        Methods
                      </Badge>
                      <Badge color="info">Purposes</Badge>
                    </CardHeader>
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/card-blog2.jpg")}
                        />
                      </a>
                    </div>
                    <CardFooter className="text-left">
                      <div className="author">
                        <Button
                          className="btn-round btn-simple"
                          color="primary"
                        >
                          <i className="tim-icons icon-triangle-right-17" />
                          View project details
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-blog card-plain">
                    <CardHeader>
                      <h2 className="title">Restaurants</h2>
                      <Badge color="success">Informations</Badge>
                    </CardHeader>
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/chester-wade.jpg")}
                        />
                      </a>
                    </div>
                    <CardFooter className="text-left">
                      <div className="author">
                        <Button
                          className="btn-round btn-simple"
                          color="success"
                        >
                          Find out more
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
              <div className="space-50" />
              <Row>
                <Col md="6">
                  <Card className="card-blog card-plain">
                    <CardHeader>
                      <h2 className="title">Activties</h2>
                      <Badge color="warning" className="mr-1">
                        Healthy
                      </Badge>
                      <Badge color="primary">Young</Badge>
                    </CardHeader>
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/fabien-bazanegue.jpg")}
                        />
                      </a>
                    </div>
                    <CardFooter className="text-left">
                      <div className="author">
                        <Button
                          className="btn-round btn-simple"
                          color="warning"
                        >
                          Read more
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
                <Col md="6">
                  <Card className="card-blog card-plain">
                    <CardHeader>
                      <h2 className="title">Ticketed Events</h2>
                      <Badge color="success" className="mr-1">
                        City
                      </Badge>
                      <Badge color="info" className="mr-1">
                        Urban
                      </Badge>
                      <Badge color="warning">Traffic</Badge>
                    </CardHeader>
                    <div className="card-image">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <img
                          alt="..."
                          className="img rounded img-raised"
                          src={require("assets/img/mark-finn.jpg")}
                        />
                      </a>
                    </div>
                    <CardFooter className="text-left">
                      <div className="author">
                        <Button className="btn-round btn-simple" color="info">
                          <i className="tim-icons icon-minimal-right" />
                          Go to page
                        </Button>
                      </div>
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END PROJECTS 3 ********* */}
          {/* ********* PROJECTS 4 ********* */}
          <div className="projects-4">
            <Container>
              <Row>
                <Col className="mr-auto ml-auto text-center" md="8">
                  <h6 className="category text-muted">Our work</h6>
                  <h2 className="title mt-0">
                    Some of Our Awesome Projects - 4
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
                        <CardTitle tag="h1">Project Alpha</CardTitle>
                      </a>
                      <h6 className="desc">Java App</h6>
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
                        <CardTitle tag="h1">Project Beta</CardTitle>
                      </a>
                      <h6 className="desc">College project</h6>
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
                        <CardTitle tag="h1">Project Gama</CardTitle>
                      </a>
                      <h6 className="desc">HTML code</h6>
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

export default Projects;
