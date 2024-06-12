// import React from 'react'
import { Fragment } from "react"
import "./style.css"
import PropTypes from "prop-types"

const CustomDynamicDialog = ({ modelHeight, modelWidth, fullMode, posX, posY, label = "Button", unqiueKey }) => {
    modelHeight = modelHeight || "inherit"
    modelWidth = modelWidth || "inherit"
    fullMode = `${fullMode}` || "false"
    posX = posX || "left"
    posY = posY || "top"
    const isDialogCentered = posX == "center" && posY == "center"
    return (
        <Fragment>
            <div style={{ padding: "2rem", display: "flex", justifyContent: "center" }} >
                <div className="dialog-menu">
                    <input type="checkbox" name={"menu" + unqiueKey} id={"menu" + unqiueKey} />
                    <label id="btn" type="button" htmlFor={"menu" + unqiueKey}>{label} {unqiueKey}</label>
                    <label htmlFor={"menu" + unqiueKey} className="close-layer"></label>
                    <div
                        className="pop-up-menu"
                        style={{ "--pop-up-menu-height": modelHeight, "--pop-up-menu-width": modelWidth, "--transform-origin": fullMode == "true" || isDialogCentered ? "center center" : `${posX} ${posY}` }}
                        data-full-mode={fullMode}
                        data-pos-x={posX}
                        data-pos-y={posY}
                    >
                        <ul className="list">
                            <label htmlFor={"menu" + unqiueKey} className="item">Close Menu</label>
                            <a className="item">Item 1</a>
                            <a className="item">Item 2</a>
                            <a className="item">Item 3</a>
                            <a className="item">Item 4</a>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

CustomDynamicDialog.props = {
    unqiueKey: PropTypes.string.isRequired,

}
export default CustomDynamicDialog