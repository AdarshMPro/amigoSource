import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

function Landing() {

    const navigate = useNavigate();

    const shopBtn = () => {
        const page = document.querySelector(".rel-container").style;
        const header = document.querySelector("header").style;
        page.opacity = "0";
        page.transition = "opacity 0.5s";
        
        header.filter = "";
        header.transition = "opacity 0.5s";

 setTimeout(() => {
        navigate("/Home");
    }, 500);

    
    }

   
    return(
<div>
    <Header mode="dark" show="true"/>
    <div className="rel-container">
        <video className="rel video" src="https://videos.pexels.com/video-files/7599312/7599312-uhd_2732_1440_25fps.mp4" width="100%" muted autoplay="1" loop preloads></video>
        <div className="rel wrapper">
        <h1 className="land-text">BETTER WEARS,<br></br>BETTER YOU</h1>
        <button className="shop-btn" onClick={shopBtn}>SHOP NOW</button>
        </div>
    </div>
</div>
    );
}

export default Landing;