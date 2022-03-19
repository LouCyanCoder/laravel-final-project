import React from "react";
import ReactDOM from "react-dom";

const Features = () => {
    return (
        <section className="features">
            <div className="features_title">
                <h2>Main Features/Benefits</h2>
                <p>
                    The who cares community searches to provide the following
                    services to the people in need.
                </p>
            </div>
            <div className="features_cards">
                <div className="features_cards--accommodation">
                    <img src="../images/accomodation.png"></img>
                    <div>
                        <h3>Accommodation</h3>
                        <p></p>
                    </div>
                </div>
                <div className="features_cards--food">
                    <img src="../images/diet.png"></img>
                    <div>
                        <h3>Food</h3>
                        <p></p>
                    </div>
                </div>
                <div className="features_cards--transport">
                    <img src="../images/bus.png"></img>
                    <div>
                        <h3>Transport</h3>
                        <p></p>
                    </div>
                </div>
                <div className="features_cards--services">
                    <img src="../images/helping.png"></img>
                    <div>
                        <h3>Services</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

// ReactDOM.render(<Features />, document.getElementById("root1"));
