import React from "react";
import ReactDOM from 'react-dom';


const AboutUs = () => {
    return (
        <section className="aboutus">
            
            <div className="aboutus__container">
                <h2>Who are we and why did we do this?</h2>
                <p>
                    We are a group of people who have decided to connect other people of goodwill with people who are struggling. 
                </p>

                <p>
                    Trying to make change in the world every day.
                </p>

                <p>
                    Because sometimes all you need to change a life...
                </p>

                <p>
                    ...is to be the one <strong>who cares.</strong>
                </p>
            </div>

            <div className="aboutus__groupphoto">
                <img src="../images/aboutusphoto.jpg" alt="Group photo of the Who Cares team"/>
                <figcaption>
                    <strong>
                        Pictured from left to right:<br/>
                        Dejan Rajković, Lucian Nguyen, Ekin Cebeci, Gheorghi Ivanciuc
                    </strong>
                </figcaption>
            </div>

            <div className="aboutus__team__container">
                <h2>The minds behind this project.</h2>

                <article className="aboutus__team">

                    <div className="aboutus__team--img">
                        <img src="../images/gheorghi_profile.jfif" alt="#" />
                    </div>

                    <h3>Gheorghi Ivanciuc</h3>

                    <p></p>
                </article>

                <article className="aboutus__team">

                    <div className="aboutus__team--img">
                    <img src="../images/dejan_profile.jpg" alt="#" />
                    </div>

                    <h3>Dejan Rajković</h3>

                    <p></p>

                </article>

                <article className="aboutus__team">

                    <div className="aboutus__team--img">
                    <img src="../images/ekin_profile.jfif" alt="#" />
                    </div>

                    <h3>Ekin Cebeci</h3>
                    <p></p>
                </article>

                <article className="aboutus__team">
                    <div className="aboutus__team--img">
                    <img src="https://media-exp1.licdn.com/dms/image/D4D35AQHYnCO_KXfq2Q/profile-framedphoto-shrink_800_800/0/1648145949352?e=1648738800&v=beta&t=CpO93fySwY_zR2WmFBdPE9Mk91IzmedgZIZtPBTQXvg" alt="#" />
                    </div>

                    <h3>Lucian Nguyen</h3>

                    <p></p>
                </article>

                
                
            </div>
        </section>
    );
};

export default AboutUs;
