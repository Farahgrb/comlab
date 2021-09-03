import "./message.css"

export default function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMv_XRZ0UjiUG8YjFt3agB3qdMzB5YNNZbG07oDYhN2hBdAnHIRv6Ppyih4KS4OhHW0Qc&usqp=CAU" alt="" className="messageImg" />
                <p className="messageText">hedha message</p>
            </div>
            <div className="messageBottom">1 year ago</div>
        </div>
    )
}
