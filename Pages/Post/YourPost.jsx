import axios from "axios";
import { useEffect, useState } from "react"
import { ApiUrl, ImageUrl } from "../../src/URLs";
import Carousel from 'react-bootstrap/Carousel';
import { MdDelete, MdEdit } from "react-icons/md";
import Modal from 'react-bootstrap/Modal';
import { toast } from "react-toastify";

const YourPost = () => {
    const userData = JSON.parse(localStorage.getItem('data'));
    const [userPosts, setUserPosts] = useState([]);
    const [showDelete, setShowDelete] = useState(false);
    const [selectedPost, setSelectedPost] = useState("");
    const handleCloseDelete = () => {
        setShowDelete(false)
        setShowUpdate(false)
    };
    const handleShowDelete = (id) => {
        setSelectedPost(id)
        setShowDelete(true)
    };
    const fn_getUserPosts = () => {
        axios.get(`${ApiUrl}/post/get/${userData?.id}`).then((res) => {
            if (res?.status === 200) {
                setUserPosts(res?.data?.data?.reverse())
            }
        })
    }
    useEffect(() => {
        fn_getUserPosts()
    }, [])
    const fn_deletePost = () => {
        console.log(selectedPost);
        axios.delete(`${ApiUrl}/post/delete/${selectedPost}`).then((res) => {
            if (res?.status === 200) {
                setShowDelete(false);
                fn_getUserPosts();
                return toast.success("Post Deleted")
            }
        }).catch((error) => {
            return toast.error(error?.response?.data?.message)
        })
    }
    return (
        <>
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Post</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are You sure! you want to Delete this Post ?</Modal.Body>
                <Modal.Footer>
                    <button className="btnStyle" onClick={fn_deletePost}>
                        <MdDelete style={{ marginTop: "-5px" }} />&nbsp;Delete
                    </button>
                </Modal.Footer>
            </Modal>
            <h3 style={{ marginBottom: "0.8rem", textAlign: "center" }}>Your Post</h3>
            <div className="yourPostMain">
                {userPosts?.map((item) => (
                    <div className="yourSinglePostMain">
                        <Carousel>
                            {item?.images?.map((image) => (
                                <Carousel.Item>
                                    <div style={{ textAlign: "center" }}>
                                        <img src={`${ImageUrl}/${image}`} width={"120px"} />
                                    </div>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                        <div>{userData?.name}</div>
                        <div>{new Date(item?.createdAt).toLocaleDateString()}</div>
                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <MdDelete style={{ cursor: "pointer" }} onClick={() => handleShowDelete(item?._id)} />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default YourPost