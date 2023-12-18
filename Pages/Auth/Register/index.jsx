import react from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="authMain">
            <div className="authSecondary">
                <div className="authImageBox">
                </div>
                <div className="authContentBox">
                    <h3 style={{ textAlign: "center" }}>Register Yourself</h3>
                    <div className="authTextStyle">
                        <label className="textStyle">Name</label>
                        <input className="inputStyle" />
                    </div>
                    <div className="authTextStyle">
                        <label className="textStyle">Email</label>
                        <input className="inputStyle" />
                    </div>
                    <div className="authTextStyle">
                        <label className="textStyle">Password</label>
                        <input className="inputStyle" />
                    </div>
                    <div className="authTextStyle" style={{ marginTop: "0.5rem" }}>
                        <input className="btnStyle" type="button" value={"Submit"} />
                    </div>
                    <div className="textStyle ms-4 mt-3 text-center">
                        Already have Account?&nbsp;
                        <b onClick={() => navigate("/login")} style={{cursor: "pointer"}}>Login</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register