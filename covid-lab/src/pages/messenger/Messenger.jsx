import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/messege/Message"
import Topbar from "../../components/topbar/Topbar"
import "./messenger.css"

export default function Messenger() {

    return (
        <>
        <Topbar/>
        <div className="messenger">
            <div className="chatMenu">
                <div className="chatMenuWrapper">
                   <input placeholder="search a colleague" className="chatMenuInput" />
                   <Conversation/>
                   <Conversation/>
                   <Conversation/>
                   <Conversation/>
                   <Conversation/>
                </div>
            </div>
            <div className="chatBox">
                <div className="chatBoxWrapper">
                     <div className="chatBoxTop">
                         <Message/>
                          <Message own={true}/>
                           <Message/>
                            <Message own={true}/>
                     </div>
                   <div className="chatBoxBottom">
                       <textarea className="chatMessageInput" placeholder="your message.."></textarea>
                       <button className="chatSubmitButton">send</button>
                   </div>
                </div>
            </div>
            <div className="chatOnline">
                <div className="chatOnlineWrapper">online</div>
            </div>
        </div>
     </>
      );
  
}
