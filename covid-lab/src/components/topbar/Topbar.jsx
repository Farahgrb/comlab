import "./topbar.css"
import {Search ,Person , Chat , Notifications ,ExitToApp} from "@material-ui/icons";
import { logoutCall } from "../../apiCalls";
import {Link} from "react-router-dom";
import {useContext } from "react";
import {AuthContext} from "../../context/AuthContext";
export default function Topbar() {
  const {user , dispatch} = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
const handleClick = (e) => {
    e.preventDefault();
    logoutCall(
      dispatch
    );
  };
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
             <Link to ="/" style={{textDecoration:"none"}}>
             <div className="logo">
                  <img src="/assets/logo.png" alt="logo" className="topbarLogo"></img>
                <span  className="logoName">COMLAB</span>
              </div>
             </Link>
              
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="search for a colleague,post or video" className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLink">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">99</span>
                    </div>
                     <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">99</span>
                    </div>
                     <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">99</span>
                    </div>
                    <Link to ={`/profile/${user.username}`}  style={{textDecoration:"none"}}>
                   <img className="topbarProfile "
                     src={user.profilePicture ? PF+user.profilePicture : PF+ "/profile/no-avatar.png" }
                      alt="" />
                     
                   </Link>

                 <div className="topbarIconItem">
                     <button className="logoutButton" type="submit" onSubmit={handleClick}  >
                   <ExitToApp/>
                     </button>   
                        
                    </div>
                
                </div>   

            </div>
        </div>
    )
}
