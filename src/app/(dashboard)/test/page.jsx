"use client";

import React, { useState } from 'react'
import CustomDynamicDialog from '@/components/Dialog/newDialog'


const Page = () => {
    const [posX, setPosX] = useState("left")
    const [posY, setPosY] = useState("bottom")
    const [fullMode, setfullMode] = useState(false)

    const posXtoggler = () => {
        setPosX(pre => {
            let newPos = pre == "left" ? "center" : pre == "center" ? "right" : pre == "right" ? "left" : pre;
            return newPos;
        });
    }
    const posYtoggler = () => {
        setPosY(pre => {
            let newPos = pre == "top" ? "center" : pre == "center" ? "bottom" : pre == "bottom" ? "top" : pre;
            return newPos;
        });
    }
    const fullModetoggler = () => {
        setfullMode(pre => !pre)
    }

    return (<div style={{ position: "relative" }}>
        <p>Togglers</p>
        <div className="controllers">
            <button onClick={posXtoggler}>Position X</button>
            <button onClick={posYtoggler}>Position Y</button>
            <button onClick={fullModetoggler}>Full Mode</button>
        </div>
        <div className="current">
            <p>Pos X : &#39;{posX}&#39;</p>
            <p>Pos Y : &#39;{posY}&#39;</p>
            <p>Full mode : &#39;{`${fullMode}`}&#39;</p>
        </div>
        <p>
            data-full-mode= false | true  if this attribute not mentioned or vaue is false then dialog is on popover mode
            <br />
            data-full-mode= true means dialog is fully centered with fixed position
            <br />
            data-pos-x= left | right | center  if this attribute not mentioned or vaue is not defined then dialog position will be left to right
            <br />
            data-pos-y= top  | bottom | center  if this attribute not mentioned or vaue is not defined then dialog position will be top to bottom
            <br />
            height and width can be define by variables like style= --pop-up-menu-height: inherit; --pop-up-menu-width: inherit.
        </p>
        <CustomDynamicDialog
            modelHeight={"250px"}
            modelWidth={"250px"}
            fullMode={fullMode}
            posX={posX}
            posY={posY}
            unqiueKey='one'
            label="Button"
        />
        <br />
    </div>
    )
}

export default Page