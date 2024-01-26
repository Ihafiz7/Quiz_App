import React from "react";
import { useDarkMode } from "../ClickContext";
import './darkMode.css';


export default function DakrModeButton () {
    const { darkMode, toggleSwitch } = useDarkMode();
    return(
        <div className="dmb-main">
            <span>Dark</span>
            <div className="toggle-switch" onClick={toggleSwitch}>
                <label className="switch-label">
                    <input type="checkbox" className="checkbox" checked={!darkMode} onChange={toggleSwitch}/>
                    <span className="slider"></span>
                </label>
            </div>
            <span>Light</span>
        </div>
    );
}