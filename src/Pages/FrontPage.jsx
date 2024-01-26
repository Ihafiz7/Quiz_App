import React from "react";
import './frontpage.css';
import { Link } from "react-router-dom";
import { useDarkMode } from "../ClickContext";

export default function FrontPage() {
    const { darkMode, toggleSwitch} = useDarkMode();
    return (
        <div className={`fp-main${!darkMode ? "-light" : ''}`}>
            <div className="fp-header">
                <span>Dark</span>
                <div className="toggle-switch" onClick={toggleSwitch}>
                    <label className="switch-label">
                        <input type="checkbox" className="checkbox" checked={!darkMode} onChange={toggleSwitch}/>
                        <span className="slider"></span>
                    </label>
                </div>
                <span>Light</span>
            </div>
            <div className="fp-maindiv">
                <div className="fp-maindiv-title">
                    <h1>Welcome to the <br /><i>Quiz!</i></h1>
                    <p>Pick a subject to get started.</p>
                </div>
                <div className="fp-maindiv-body">
                    <Link to='/topic/linux' className="link">
                        <button>Linux</button>
                    </Link>
                    <Link to='/topic/devops' className="link">
                        <button>DevOps</button>
                    </Link>
                    <Link to='/topic/sql' className="link">
                        <button>My SQL</button>
                    </Link>
                    <Link to='/topic/docker' className="link">
                        <button>Doker</button>
                    </Link>
                </div>
            </div>
            
        </div>
    );
}