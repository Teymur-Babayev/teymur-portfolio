import React, { useContext, useRef } from "react";
import { StyleModeContext } from "../../context/StyleModeProvider";

const StyleSwitcher = () => {

    const { darkMode, toggleDarkMode, toggleColorMode } = useContext(StyleModeContext);
    const refStyleSwitcher = useRef();

    const onClickStyleSwitcher = (e) => {
        if (!Array.from(refStyleSwitcher.current.classList).includes('open'))
            refStyleSwitcher.current.classList.add('open');
        else
            refStyleSwitcher.current.classList.remove('open');
    }

    return (
        <div className="style-switcher" ref={refStyleSwitcher} >
            <div className="toggle-style-switcher" onClick={onClickStyleSwitcher}>
                <i className="fa fa-cog fa-spin"></i>
            </div>
            <h5>Style Switcher</h5>
            <ul>
                <li><p title="pink" style={{ backgroundColor: "#ec1839" }} onClick={() => toggleColorMode('#ec1839')}></p></li>
                <li><p title="blue" style={{ backgroundColor: "#2196f3" }} onClick={() => toggleColorMode('#2196f3')}></p></li>
                <li><p title="orange" style={{ backgroundColor: "#fa5b0f" }} onClick={() => toggleColorMode('#fa5b0f')}></p></li>
                <li><p title="yellow" style={{ backgroundColor: "#ffb400" }} onClick={() => toggleColorMode('#ffb400')}></p></li>
                <li><p title="green" style={{ backgroundColor: "#72b626" }} onClick={() => toggleColorMode('#72b626')}></p></li>
            </ul>
            <h5>Body Skin</h5>
            <label>
                <input type="checkbox" className="body-skin" name="body-skin" value="light" onClick={toggleDarkMode} defaultChecked={!darkMode} />
                {!darkMode && "  Light"}
                {darkMode && "  Dark"}
            </label>
            {/* <label>
                <input type="radio" className="body-skin" name="body-skin" value="light" onClick={toggleDarkMode} defaultChecked={!darkMode} /> Light
            </label>
            <label>
                <input type="radio" className="body-skin" name="body-skin" value="dark" onClick={toggleDarkMode} defaultChecked={darkMode} /> Dark
            </label> */}
        </div>
    );
}

export default StyleSwitcher;