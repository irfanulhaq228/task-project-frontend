import axios from "axios";
import { useState } from "react"
import { ApiUrl } from "../../src/URLs";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreatePort = () => {
    const navigate = useNavigate();
    const ownerData = JSON.parse(localStorage.getItem('data'));
    const [heading, setHeading] = useState("");
    const [description, setDescription] = useState("");
    const [images, setImages] = useState([]);
    const [selectedImages, setSelectedImages] = useState([]);
    const fn_selectImage = (e) => {
        const file = e.target.files[0];
        setImages(prev => [...prev, e.target.files[0]])
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImages(prev => [...prev, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    }
    const fn_submit = () => {
        const formData = new FormData();
        formData.append('owner', ownerData?.id);
        formData.append('heading', heading);
        formData.append('description', description);
        images.forEach((image) => {
            formData.append(`images`, image);
        });
        axios.post(`${ApiUrl}/post/create`, formData).then((res) => {
            if(res?.status === 200){
                navigate("/")
                return toast.success("Post Created")
            }
        }).catch((error) => {
            return toast.error(error?.response?.data?.message)
        })
    }
    return (
        <div style={{ width: "80%" }}>
            <h3 style={{ marginBottom: "0.8rem", textAlign: "center" }}>Create Post</h3>
            <div className="postFormMain">
                <div className="postInputs">
                    <label>Upload Images</label>
                    <input type="file" onChange={(e) => fn_selectImage(e)} />
                    {selectedImages?.length > 0 && (
                        <div className="selectedImageBox">
                            {selectedImages?.map(item =>
                                <div>
                                    <img src={item} width={"130px"} height={"130px"} style={{ borderRadius: "0.5rem" }} />
                                </div>
                            )}
                        </div>
                    )}
                </div>
                <div className="postInputs">
                    <label className="textStyle">Heading</label>
                    <input className="inputStyle" onChange={(e) => setHeading(e.target.value)} />
                </div>
                <div className="postInputs">
                    <label className="textStyle">Description</label>
                    <textarea className="inputStyle" style={{ height: "170px" }} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <div className="postInputs" style={{ marginTop: "1rem" }}>
                    <input className="btnStyle" type="button" style={{ width: "100%" }} value={"Submit"} onClick={fn_submit} />
                </div>
            </div>
        </div>
    )
}

export default CreatePort