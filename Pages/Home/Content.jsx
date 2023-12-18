import react from "react";
import SinglePost from "./SinglePost";
import Header from "../../Components/Header";

const Content = ({ posts }) => {
    console.log(posts)
    return (
        <>
            {/* <Header /> */}
            <div className="contentMain">
                <Header />
                <div className="postMain">
                    {posts?.map((item) => (
                        <SinglePost item={item} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Content