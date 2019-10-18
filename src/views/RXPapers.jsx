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
// react plugin used to create charts
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";


// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  UncontrolledTooltip
} from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";

import DemoFooter from "components/Footers/DemoFooter.jsx";
import RXFooter from "views/IndexSections/RXFooter.jsx";
import RXNavbar from "components/Navbars/RXNavbar.jsx";

import PaperSection from "views/SectionsSections/PaperSection.jsx"



import { chartExample1 } from "variables/charts.js";

class RXPapers extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("landing-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("landing-page");
  }
  render() {
    return (
      <>
        <RXNavbar />
        <div className="wrapper" ref="wrapper">
    
          <PaperSection />
        
          <RXFooter />
          {/* <DemoFooter /> */}
        </div>
      </>
    );
  }
}

export default RXPapers;