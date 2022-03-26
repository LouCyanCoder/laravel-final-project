import React from "react";
import ReactDOM from "react-dom";
import Button from '@mui/material/Button';

const Landing = () => {

    console.log(document.querySelector("meta[name='totally-not-user-id']").content)

    return (
        <section className="landing_container">
            <div className="landing_img">
                <img src="../images/world-background.png"></img>
            </div>
            <div className="landing_intro">
                <div className="landing_info">
                    <h1>Are you the one who cares?</h1>
                    <p>
                        Our mission is to connect people who are struggling with
                        people who can provide help. You can either join the
                        community of helpers or use a helping hand.
                    </p>
                </div>
                <div className="landing_btn">

                    <a href="/register">
                    <Button
                    size="large"
                    variant="contained"
                    color="success"
                    className=""
                    >
                    I am the one who cares
                    </Button> 
                    </a>

                    <a href="">
                    <Button
                    size="large"
                    variant="contained"
                    color="secondary"
                    className=""
                    >
                    I could use a helping hand
                    </Button>
                    </a>

                </div>
            </div>            
        </section>
    );
};

export default Landing;

// ReactDOM.render(<Landing />, document.getElementById("root"));
