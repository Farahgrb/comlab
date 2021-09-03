import "./sidebar.css";
import{Button} from 'react-bootstrap';
import {RssFeed,Today,Bookmark,EmojiObjects,VideoLibrary,LibraryBooks} from "@material-ui/icons"
import { Users } from "../../usefullData";
import Online from "../online/Online";
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <LibraryBooks className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Library</span>
                    </li>
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Today className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Schedule</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Bookmark</span>
                    </li>
                    <li className="sidebarListItem">
                        <EmojiObjects className="sidebarIcon"/>
                        <span className="sidebarListItemText" >Ideas</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary className="sidebarIcon"/>
                        <span className="sidebarListItemText" >videos</span>
                    </li>
                </ul>
                
               <button type="button" class="btn btn-outline-danger">Show More</button> {``}
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                     {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
                </ul>
                
            </div>
        </div>
    )
}
