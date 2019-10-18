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
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class RXFooter extends React.Component {
  render() {
    return (
      <>
        {/* <div className="section section-footers" data-background-color="gray"> */}
          {/* <Container>
            <div className="title">
              <h3>Footer Areas</h3>
            </div>
          </Container> */}
          {/* <div id="footer-areas"> */}
        
            {/* ********* BIG WHITE FOOTER V2 ********* */}
            <footer className="footer footer-white footer-big">
              <Container>
                <div className="content">
                  <Row>
                    <Col md="3">
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <h5>REALX• Platform</h5>
                      </a>
                      <p>
                        Tokeninzing the world of Experience Capital
                      </p>
                    </Col>
                    <Col md="2">
                      <h5>About</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="https://www.medium.com/realx" onClick={e => e.preventDefault()}>
                            Blog
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            About Us
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Papers
                          </a>
                        </li>
                        <li>
                          <a href="/rx-about" onClick={e => e.preventDefault()}>
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="2">
                      <h5>Market</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            FAQ
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Get Tokenized
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Experiences
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Get Wallet
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Education
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="2">
                      <h5>Legal</h5>
                      <ul className="links-vertical">
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            PRIVACY POLICY
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li>
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            DISCLAIMERS
                          </a>
                        </li>
                      </ul>
                    </Col>
                    <Col md="3">
                      <h5>Subscribe to Newsletter</h5>
                      <p>
                        Join our newsletter and get news in your inbox every
                        week! We hate spam too, so no worries about this.
                      </p>
                      <Form
                        action=""
                        className="form form-newsletter"
                        method=""
                      >
                        <FormGroup>
                          <Input placeholder="Your Email..." type="email" />
                        </FormGroup>
                        <Button
                          className="btn-icon btn-round"
                          color="primary"
                          name="button"
                          type="button"
                        >
                          <i className="tim-icons icon-email-85" />
                        </Button>
                      </Form>
                    </Col>
                  </Row>
                </div>
                <hr />
                <ul className="social-buttons">
                  <li>
                    <Button
                      className="btn-icon"
                      color="twitter"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon ml-1"
                      color="facebook"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon ml-1"
                      color="dribbble"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-dribbble" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon ml-1"
                      color="google"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-google-plus" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      className="btn-icon ml-1"
                      color="youtube"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </li>
                </ul>
                <div className="copyright pull-center">
                  Copyright © {new Date().getFullYear()} Creative Tim All Rights
                  Reserved.
                </div>
              </Container>
            </footer>
            {/* ********* END BIG WHITE FOOTER v2 ********* */}
          {/* </div> */}
        {/* </div> */}
      </>
    );
  }
}

export default RXFooter;
