import React, { Component } from "react";
import "./Sidebar.css";

class Sidebar extends Component {
    render() {
      return (

        <div className="nav">
        <input type="checkbox" id="menu" />
        <label htmlFor="menu" id="nav-icon">☰</label>
        <div className="multi-level">
          <div className="item">
            <input type="checkbox" id="A" />
            <img src="./Arrow.png" className="arrow" /><label htmlFor="A">Heading</label>
            <ul>
              <li><a href="#">sub-heading</a></li>
              <li><a href="#">sub-heading</a></li>
              <li><a href="#">sub-heading</a></li>
            </ul>
          </div>
          <div className="item">
            <input type="checkbox" id="B" />
            <img src="./Arrow.png" className="arrow" /><label htmlFor="B">Heading</label>
            <ul>
              <li><div className="sub-item">
                  <input type="checkbox" id="B-A" />
                  <img src="./Arrow.png" className="arrow" /><label htmlFor="B-A">sub-heading</label>
                  <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                  </ul>
                </div></li>
              <li><div className="sub-item">
                  <input type="checkbox" id="B-B" />
                  <img src="./Arrow.png" className="arrow" /><label htmlFor="B-B">sub-heading</label>
                  <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                  </ul>
                </div></li>
              <li><a href="#">sub-heading</a></li>
              <li><a href="#">sub-heading</a></li>
            </ul>
          </div>
          <div className="item">
            <input type="checkbox" id="C" />
            <img src="./Arrow.png" className="arrow" /><label htmlFor="C">Heading</label>
            <ul>
              <li><a href="#">sub-heading</a></li>
              <li><a href="#">sub-heading</a></li>
              <li><a href="#">sub-heading</a></li>
            </ul>
          </div>
        </div>
      </div>

      )
    }
}

export default Sidebar;
