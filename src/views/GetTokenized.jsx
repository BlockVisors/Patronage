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
import RXFooter from "views/IndexSections/RXFooter.jsx";
import RXNavbar from "components/Navbars/RXNavbar.jsx";

import RXFAQ from "views/SectionsSections/RXFAQ.jsx";
import RXContact from "views/SectionsSections/RXContact.jsx";

import RXPricing from "views/SectionsSections/RXPricing.jsx"
import GTHeader from "views/SectionsSections/GTHeader.jsx"
import RXTables from "views/SectionsSections/RXTables.jsx"




import { chartExample1 } from "variables/charts.js";

class GetTokenized extends React.Component {
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
         
          <GTHeader />
          <RXPricing />
          <RXTables />
        
          <RXFooter />
          {/* <DemoFooter /> */}
        </div>
      </>
    );
  }
}

export default GetTokenized;
