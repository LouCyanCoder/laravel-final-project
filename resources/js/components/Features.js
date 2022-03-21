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
                        <p>If you have a spare place, bedroom or even just a bed to temporarily accomodate, you can provide it to the people in need. Just having a safe place to sleep can help somebody gain a foothold in their life.</p>
                    </div>
                </div>
                <div className="features_cards--food">
                    <img src="../images/diet.png"></img>
                    <div>
                        <h3>Food</h3>
                        <p>Having something to eat is one of the fundamental human rights. If you have any extra food, want to get rid of groceries before expiration date or are a bussiness owner whose food supplies would usually end up in a bin or a landfill, get in touch with us!</p>
                    </div>
                </div>
                <div className="features_cards--transport">
                    <img src="../images/bus.png"></img>
                    <div>
                        <h3>Transport</h3>
                        <p>Due to the ongoing war in Ukraine, demand for transportation has recently rised up. If you plan a trip to the Ukrainian borders or want to take part in safely transporting the Ukrainian refugess, You can use our page to post details about the possibilities.</p>
                    </div>
                </div>
                <div className="features_cards--services">
                    <img src="../images/helping.png"></img>
                    <div>
                        <h3>Services</h3>
                        <p>If you are specializing in services such as: translation, administrative services, law services, psychology and psychotherapy and more, You can provide them to the people who might need it the most but are unable to afford them otherwise.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

// ReactDOM.render(<Features />, document.getElementById("root1"));
