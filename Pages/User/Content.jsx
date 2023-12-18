import react, { useRef, useState } from "react";
import Header from "../../Components/Header";
import axios from "axios";
import { ApiUrl } from "../../src/URLs";
import { toast } from "react-toastify";

const Content = () => {
    const fileInputRef = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [params, setParams] = useState({});
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (event) => {
        setParams({ ...params, profileImage: event.target.files[0] })
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedFile(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const fn_submit = () => {
        const formData = new FormData();
        formData.append("name", params.name);
        formData.append("email", params.email);
        formData.append("password", params.password);
        formData.append("profileImage", params.profileImage);
        axios.post(`${ApiUrl}/user/create`, formData).then((res) => {
            if (res?.data?.status === 200) {
                return toast.success("User Created Successfully");
            } else {
                return toast.error(res?.data?.message)
            }
        }).catch(error => {
            return toast.error(error?.response?.data?.message)
        })
    }
    return (
        <>
            <div className="contentMain">
                <Header />
                <div className="postMain">
                    <div className="authContentBox">
                        <div className="authTextStyle">
                            <div className="userProfileImage">
                                {selectedFile === null ? (
                                    <div className="userSelectedProfile"></div>
                                ) : (
                                    <img src={selectedFile} width={"180px"} height={"180px"} style={{ borderRadius: "50rem" }} />
                                )}
                            </div>
                            <input ref={fileInputRef} type="file" style={{ display: 'none' }} onChange={handleFileChange} />
                            <button className="btnStyle" onClick={handleButtonClick} style={{ marginTop: "0.2rem" }}>
                                Upload Profile Image
                            </button>
                        </div>
                        <div className="authTextStyle">
                            <label className="textStyle">Name</label>
                            <input className="inputStyle" onChange={(e) => setParams({ ...params, name: e.target.value })} />
                        </div>
                        <div className="authTextStyle">
                            <label className="textStyle">Email</label>
                            <input className="inputStyle" onChange={(e) => setParams({ ...params, email: e.target.value })} />
                        </div>
                        <div className="authTextStyle">
                            <label className="textStyle">Password</label>
                            <input className="inputStyle" onChange={(e) => setParams({ ...params, password: e.target.value })} />
                        </div>
                        <div className="authTextStyle" style={{ marginTop: "0.5rem" }}>
                            <input className="btnStyle" type="button" value={"Submit"} onClick={fn_submit} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content