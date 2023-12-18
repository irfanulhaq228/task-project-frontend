import react from "react";
import { GrGallery } from "react-icons/gr";
import { RiGalleryFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { MdLockPerson } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAuth } from "../../Features/Auth/authSlice";
import { toast } from "react-toastify";

const LeftSidebar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const fn_logout = () => {
        toast.success("Logged Out Successfully")
        dispatch(updateAuth(false))
        localStorage.removeItem('data');
    }
    return (
        <div className="LeftSidebarMain">
            <h4 className="LeftbarHeading">IKONIC</h4>
            <div style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "100vh",
                justifyContent: "space-between",
                paddingBottom: "2rem"
            }}>
            <div className="linksMain">
                <div className="singleLink" onClick={() => navigate("/")}>
                    <div className="linkLogo"><GrGallery /></div>
                    <div>Posts</div>
                </div>
                <div className="singleLink" onClick={() => navigate("/post")}>
                    <div className="linkLogo"><RiGalleryFill /></div>
                    <div>Your Posts</div>
                </div>
                <div className="singleLink" onClick={() => navigate("/user")}>
                    <div className="linkLogo"><FaUser /></div>
                    <div>Add User</div>
                </div>
                <div className="singleLink" onClick={() => navigate("/role")}>
                    <div className="linkLogo"><MdLockPerson /></div>
                    <div>Add Role</div>
                </div>
            </div>
            <div className="linksMain">
                <div className="singleLink" onClick={fn_logout}>
                    <div className="linkLogo"><MdLockPerson /></div>
                    <div>Log out</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default LeftSidebar