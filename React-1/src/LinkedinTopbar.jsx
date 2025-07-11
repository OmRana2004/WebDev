import { useState } from "react";

function LinkedinTopbar() {
    const [currentTab,setCurrentTab] = useState("feed");
    return(
        <div>
            <button onClick={()=> setCurrentTab("feed")} style={{color: currentTab == "feed" ? "red" : "black"}}>feed</button>
            <button onClick={()=> setCurrentTab("notifications")} style={{color: currentTab == "notifications" ? "red" : "black"}}>Notifications</button>
            <button onClick={()=> setCurrentTab("message  ")} style={{color: currentTab == "message" ? "red" : "black"}}>Message</button>
            <button onClick={()=> setCurrentTab("jobs")} style={{color: currentTab == "jobs" ? "red" : "black"}}>jobs</button>
        </div>
    )
}


export default LinkedinTopbar;