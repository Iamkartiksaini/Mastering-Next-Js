"use client";

import Wait from "@/utils/wait"
import { useEffect, useState } from "react";
const Post = () => {
    const [load, setLoad] = useState(false)
    const [time, setTime] = useState(6)


    useEffect
        (() => {
            (async () => {
                const response = await Wait(6000, true, "Working")
                setLoad(true)
            })()
        }, [])

    useEffect(() => {
        if (time > 1) {
            setTimeout(() => {
                setTime(time - 1)
            }, 1000)
        }
    }, [time])


    if (!load) {
        return <h3>
            Client Component
            <br />
            Loading Page wait {time} seconds ....
        </h3>
    }
    console.log("laoded", time);
    return (
        <div>
            Client Component
            <br />
            Post Post Loaded</div>
    )
}

export default Post
