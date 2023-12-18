import axios from "axios";
import react, { useState } from "react";
import { ApiUrl } from "../../../src/URLs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { updateAuth } from "../../../Features/Auth/authSlice";

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const fn_submit = () => {
        const params = {
            email, password
        }
        axios.post(`${ApiUrl}/user/login`, params).then((res) => {
            localStorage.setItem('data', JSON.stringify({
                id: res?.data?.data?._id,
                email: res?.data?.data?.email,
                name: res?.data?.data?.name
            }));
            dispatch(updateAuth(true))
            navigate("/")
            return toast.success("User Logged In")
        }).catch(error => {
            return toast.error(error?.response?.data?.message)
        })
    }
    return (
        <div className="authMain">
            <div className="authSecondary">
                <div className="authImageBox">
                </div>
                <div className="authContentBox">
                    <h3 style={{ textAlign: "center" }}>Login Yourself</h3>
                    <div className="authTextStyle">
                        <label className="textStyle">Email</label>
                        <input className="inputStyle" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="authTextStyle">
                        <label className="textStyle">Password</label>
                        <input type="password" className="inputStyle" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="authTextStyle" style={{ marginTop: "0.5rem" }}>
                        <input className="btnStyle" type="button" value={"Submit"} onClick={fn_submit} />
                    </div>
                    <div className="textStyle ms-4 mt-3 text-center">
                        Create an Account?&nbsp;
                        <b onClick={() => navigate("/register")} style={{cursor: "pointer"}}>Register</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login