import react, { useEffect, useState } from "react";
import Content from "./Content";
import LeftSidebar from "../../Components/LeftSidebar";
import RightSidebar from "../../Components/RightSidebar";
import axios from "axios";
import { ApiUrl } from "../../src/URLs";

const Home = ({setAuth}) => {
    const [posts, setPosts] = useState([]);
    const fn_getAllPosts = () => {
        axios.get(`${ApiUrl}/post/getAll`).then((res) => {
            if(res?.status === 200){
                return setPosts(res?.data?.data?.reverse())
            }
        })
    }
    useEffect(() => {
        fn_getAllPosts()
    },[])
    return (
        <div className="sectionMain">
            <LeftSidebar setAuth={setAuth} />
            <Content posts={posts} />
            <RightSidebar />
        </div>
    )
}

export default Home