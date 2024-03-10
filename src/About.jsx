import React, { Fragment } from "react";
import { Link } from "react-router-dom";

function About() {
    const body = document.getElementById("body");
    body.style.backgroundColor = "purple";

    return(
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-dark ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ps-5">
                            <Link to={ "/" }  className="nav-link text-secondary fs-4 me-4">მთავარი</Link>
                            <Link to={ "/contact" }  className="nav-link text-secondary fs-4 me-4">კონტაკტი</Link>
                            <Link to={ "/about" }  className="nav-link text-light fs-4 me-4 active" aria-current="page">ჩვენს შესახებ</Link>
                        </div>
                    </div>
                </div>
            </nav>    
            <div className="d-flex justify-content-center pt-4">
                <h1 className="text-light">ჩვენს შესახებ</h1>
            </div>
        </Fragment>    
    );
}

export default About;