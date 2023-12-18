import { useState } from "react"
import Header from "../../Components/Header"
import CreatePort from "./CreatePost"
import YourPost from "./YourPost"

const Content = () => {
    const [selectedOption, setSelectedOption] = useState("createPost");
    return(
        <div className="contentMain">
            <Header />
            <div className="postMainButton">
                <button className="btnStyle" onClick={() => setSelectedOption("createPost")}>Create Post</button>
                <button className="btnStyle" onClick={() => setSelectedOption("yourPost")}>Your Posts</button>
            </div>
            {selectedOption === "createPost" ? <CreatePort /> : <YourPost />}
        </div>
    )
}

export default Content