// import React from 'react'
import { Fragment } from "react"
import styles from "./Right.module.scss"
import PropTypes from "prop-types"

const CustomRightDynamicDialog = ({ TiggerComponent, modelHeight, modelWidth, posY, label = "Button", unqiueKey, children }) => {
    modelHeight = modelHeight || "max-content"
    modelWidth = modelWidth || "max-content"
    posY = posY || "top"
    return (
        <Fragment>
            <div>
                <div style={{ "--transform-origin": `right ${posY}` }} className={styles.dialogMenu}>
                    <input className={styles.inputBox} type="checkbox" name={"menu" + unqiueKey} id={"menu" + unqiueKey} />
                    {TiggerComponent ? <label unstyled="true" id="btn" type="button" htmlFor={"menu" + unqiueKey}> <TiggerComponent /></label> :
                        <label className={`${styles.btn} ${styles.label}`} id="btn" type="button" htmlFor={"menu" + unqiueKey}>{label || "Button"}</label>}
                    <label htmlFor={"menu" + unqiueKey} className={`${styles.closeLayer} ${styles.label}`}></label>
                    <div
                        className={styles.menuBox}
                        style={{ "--pop-up-menu-height": modelHeight, "--pop-up-menu-width": modelWidth }}
                        data-pos-y={posY}
                    >
                        {children ? children :
                            <ul className={styles.lists}>
                                <label htmlFor={"menu" + unqiueKey} className={`${styles.item} ${styles.label}`}>Close Menu</label>
                                <a className={styles.item}>Item 1</a>
                                <a className={styles.item}>Item 2</a>
                                <a className={styles.item}>Item 3</a>
                                <a className={styles.item}>Item 4</a>
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

CustomRightDynamicDialog.props = {
    unqiueKey: PropTypes.string.isRequired,

}
export default CustomRightDynamicDialog