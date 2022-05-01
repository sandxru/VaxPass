import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <center>
      <div className="container">
        <div className="row">
          {/*coloumn1*/}
          <div className="col">
            <br  />
            <div className="topic">
            <h3>VaxPass <img id="footerlogo" src="./logo.png" height={'40px'} width={'40px'} alt="vaxpass-lg"/></h3>
            </div>
            <hr  />
            <ul className="list-unstyled">
              <li>STACK 32 : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Sandaru &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Anuja &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yaathaven &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Dilshan &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Rangitha</li>
            </ul>
            <h5>&copy;All rights reserved</h5>
          </div>
        </div>
      </div>
      </center>
    </div>
  );
}

export default Footer;
