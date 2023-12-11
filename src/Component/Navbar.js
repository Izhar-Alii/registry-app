import React from 'react'
import propsTypes from 'prop-types'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function Navbar(props) {
    const linkColor = {
        color: props.mode=="light" && props.redMode=="light"?"black": props.redMode=="danger" ? "white" : "white"
    }
  return (
    <nav className = {`navbar navbar-expand-lg bg-${props.mode=="light" && props.redMode=="light"?"light": props.redMode=="danger" ? "danger" : "dark"}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="#" style = {linkColor}>{props.title}</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#" style = {linkColor}>Home</a>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link" href="/about" style = {linkColor}>{props.about}</Link>
                    </li> */}
                </ul>
            <form className="d-flex" role="search">
                <div className="form-check form-switch mx-2">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                    <label className="form-check-label" for="flexSwitchCheckDefault" style = {linkColor}>{props.mode == "light"?"enable dark mode":"enable light mode"}</label>
                </div>
                {/* <div className="form-check form-switch mx-2">
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleRedMode}/>
                    <label className="form-check-label" for="flexSwitchCheckDefault" style = {linkColor}>{props.mode == "light"?"enable red mode":"enable light mode"}</label>
                </div> */}
            </form>
            </div>
        </div>
    </nav>
  )
}

Navbar.propsTypes = {
    brand: propsTypes.string,
    about: propsTypes.string
}

