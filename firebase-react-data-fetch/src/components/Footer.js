import React from "react";
import Navbar from "react-bootstrap/Navbar";
class Footer extends React.Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar
        style={{ backgroundColor: "#141414" }}
          variant="dark"
          sticky="Bottom"
        >
          <Navbar.Brand >
            Firebase + React
          </Navbar.Brand>
        </Navbar>
       
      </div>
    );
  }
}

export default Footer;
