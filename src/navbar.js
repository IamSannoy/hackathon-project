import React, { Fragment } from 'react';
let shoot= (evt) => {
    
    evt.preventDefault();
    console.log("okay");
    document.querySelector("#popup").style.display = "flex";

}
export default function Navbar(){
        return (
          <Fragment>
          <div className="nav">
            <a>
              Bengal Institute of Technology
            </a>
              <form className="d-flex">
                <button onClick={shoot} type="button" className="btn btn-success">LOG IN</button>
              </form>
            </div>
            <div className="mainbody">
            <button type="button" className="btn bt-danger">About Institution</button>
            <button type="button" className="btn bt-danger">Achivements</button>
            <button type="button" className="btn bt-danger">Faculty</button>
            <button type="button" className="btn bt-danger">Research & Development</button>
            <button type="button" className="btn bt-danger">Anti-Ragging</button>
            <button type="button" className="btn bt-danger">Events</button>
            <button type="button" className="btn bt-danger">Placement</button>
            <button type="button" className="btn bt-danger">Sports & Cultural Activities</button>
            </div>
            <div id="popup">
            <div id="popcon">
    <form>
      <i className="bi bi-backspace-reverse-fill"></i>
      <input id="username" type="text" placeholder="username" required="" />
      <input id="password" type="password" placeholder="password" required="" />
      <button  className="btn btn-success">LOG IN</button>
    </form>
  </div>
        </div>  
  </Fragment>
        );
        
    }
