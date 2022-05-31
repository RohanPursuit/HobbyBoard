import {socket} from "../../App.js"
import {useEffect} from "react"

const Notifications = () => {
    const user = document.cookie.split("=")[1];
    const notify = () => {
        socket.on("notify" + user, () => {

        })
    }

    useEffect(() => {

    })

    return (
        <div className="Notification">
            Notification
        </div>
    )
}