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
import { Badge, Button, Container, Row, Col } from "reactstrap";

class Features extends React.Component {
  render() {
    return (
      <>
        <div className="cd-section" id="features">
          
          
          {/* ********* FEATURES 4 ********* */}
          <div className="features-4">
            <Container>
              <Row className="align-items-center">
                <Col className="mr-auto text-left" lg="3">
                  <h1 className="title">You should be here!</h1>
                  <p className="description">
                    5,000 capacity venue, holding some of the latest technology
                    lighting with a 24 colour laser system Amnesia is one of the
                    islands most legendary clubs.
                  </p>
                  <Button
                    className="mt-3"
                    color="primary"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Learn more <i className="tim-icons icon-double-right" />
                  </Button>
                </Col>
                <Col className="p-sm-0" lg="8">
                  <Row>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-satisfied" />
                        </div>
                        <h4 className="info-title">Best Quality</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-palette" />
                        </div>
                        <h4 className="info-title">Awesome Design</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-user-run" />
                        </div>
                        <h4 className="info-title">Fast Development</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="info info-primary">
                        <div className="icon icon-white">
                          <i className="tim-icons icon-bulb-63" />
                        </div>
                        <h4 className="info-title">Super Fresh</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 4 ********* */}
          {/* ********* FEATURES 5 ********* */}
          <div className="features features-5">
            <Container>
              <Row className="align-items-center">
                <Col lg="6">
                  <div className="featured-image">
                    <img
                      alt="..."
                      height="600"
                      src={require("assets/img/pawel-nolbert.jpg")}
                      width="500"
                    />
                  </div>
                </Col>
                <Col className="mt-md-5" lg="6">
                  <h6 className="category">Read this first</h6>
                  <h1 className="title">Company values</h1>
                  <Row>
                    <Col lg="6" md="6">
                      <div className="info">
                        <h4 className="info-title">Honest</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                      <div className="info">
                        <h4 className="info-title">Efficient</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Col lg="6" md="6">
                      <div className="info">
                        <h4 className="info-title">Helpful</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                      <div className="info">
                        <h4 className="info-title">Quality</h4>
                        <p className="description">
                          Gain access to the demographics, psychographics, and
                          location of unique people.
                        </p>
                      </div>
                    </Col>
                    <Button
                      className="btn-link ml-4"
                      color="primary"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      Why we are different{" "}
                      <i className="tim-icons icon-double-right" />
                    </Button>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 5 ********* */}
          {/* ********* FEATURES 6 ********* */}
          <div className="features-6">
            <Container>
            <Row>
                <Col className="ml-auto mr-auto text-center" md="6">
                  <h2 className="title mb-4 mt-5">Real X Use Cases</h2>
                  <div className="section-space" />
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col lg="6">
                  <div className="info info-horizontal info-default">
                    <div className="icon icon-warning">
                      <i className="tim-icons icon-atom" />
                    </div>
                    <div className="description">
                      <h3 className="info-title">For Developers</h3>
                      <p>
                        The moment you use Black Kit, you know you’ve never felt
                        anything like it. With a single use, this powerfull UI
                        Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal info-default">
                    <div className="icon icon-info">
                      <i className="tim-icons icon-app" />
                    </div>
                    <div className="description">
                      <h3 className="info-title">For Designers</h3>
                      <p>
                        The moment you use Black Kit, you know you’ve never felt
                        anything like it. With a single use, this powerfull UI
                        Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                  <div className="info info-horizontal info-default">
                    <div className="icon icon-success">
                      <i className="tim-icons icon-bell-55" />
                    </div>
                    <div className="description">
                      <h3 className="info-title">For Beginners</h3>
                      <p>
                        The moment you use Black Kit, you know you’ve never felt
                        anything like it. With a single use, this powerfull UI
                        Kit lets you do more than ever before.
                      </p>
                    </div>
                  </div>
                </Col>
                <Col lg="6" xs="10">
                  <img
                    alt="..."
                    className="shape"
                    src={require("assets/img/path2.png")}
                  />
                  <figure className="ie-non-standard-hero-shape">
                    <svg
                      className="injected-svg js-svg-injector"
                      style={{ enableBackground: "new 10 12 878.9 907" }}
                      viewBox="10 12 878.9 907"
                      x="0px"
                      y="0px"
                      xmlSpace="preserve"
                    >
                      <g>
                        <defs>
                          <path
                            d="M329.15,403.44c30.22-62,26.51-223.94,94.06-268.46C479,98.23,560.16,257,700.68,151.61c71.25-53.44,85.54,81,160.38,172.6C1008.5,504.74,881.5,639.14,825.35,686.6c-62.54,52.85-246.14,24.42-386.7,79.28S214.07,834,202.07,702C190.39,573.57,288.69,486.43,329.15,403.44Z"
                            id="firstShape"
                          />
                        </defs>
                        <clipPath id="secondShape">
                          <use
                            style={{ overflow: "visible" }}
                            xlinkHref="#firstShape"
                          />
                        </clipPath>
                        <g clipPath="url(#secondShape)">
                          <image
                            height="900"
                            id="imageShape1"
                            style={{ overflow: "visible" }}
                            transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                            width="900"
                            xlinkHref={require("assets/img/max.jpg")}
                          />
                        </g>
                      </g>
                      <g>
                        <defs>
                          <path
                            d="M337.17,855.62c-7.81-35.46,42.38-43.95,63.66-52.44,24.39-9.74,135.86-48,192.58-52.52,64.22-5.13,190.21-26.84,160.46,35.34-19.76,41.3-51.47,64.52-87.63,62.33-46.36-2.81-101.56,4.39-150.8,44C448.53,946.08,450.93,865,412,868,372.28,871,340.79,872.08,337.17,855.62Z"
                            id="thirdShape"
                          />
                        </defs>
                        <clipPath id="fourthShape">
                          <use
                            style={{ overflow: "visible" }}
                            xlinkHref="#thirdShape"
                          />
                        </clipPath>
                        <g
                          clipPath="url(#fourthShape)"
                          transform="matrix(1 0 0 1 0 0)"
                        >
                          <image
                            height="1000"
                            id="imageShape2"
                            style={{ overflow: "visible" }}
                            transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                            width="900"
                            xlinkHref={require("assets/img/max.jpg")}
                          />
                        </g>
                      </g>
                    </svg>
                  </figure>
                </Col>
              </Row>
            </Container>
          </div>
          {/* ********* END FEATURES 6 ********* */}
        </div>{" "}
      </>
    );
  }
}

export default Features;
