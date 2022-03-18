import React from "react";

const Landing = () => {
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
                    <button>I'm the on who cares</button>
                    <button>I could use a helping hand</button>
                </div>
            </div>
        </section>
    );
};

export default Landing;
