import React from "react";
import LeftSidebar from "../../Components/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar";
import Content from "./Content";

const User = ({ setAuth }) => {
    return (
        <div className="sectionMain">
            <LeftSidebar setAuth={setAuth} />
            <Content />
            <RightSidebar />
        </div>
    )
}

export default User