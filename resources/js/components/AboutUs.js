import React from "react";
import ReactDOM from 'react-dom';


const AboutUs = () => {
    return (
        <section className="aboutus">
            <div className="aboutUs__container">
                <h2>Who are we and why do we do this?</h2>
                <p>
                    We are a group of people who have decided to connect other people of goodwill with people who are struggling. 
                </p>

                <p>
                    Trying to make change in the world every day. Because sometimes all you need to change a life...
                </p>

                <p>
                    ...is to be the one <strong>who cares.</strong>
                </p>
            </div>
            <div className="aboutus__team">
                <h2>The minds behind this project.</h2>

                <article className="aboutus__team--gheorghi">
                    <img src="#" alt="#" />
                    <h3>Gheorghi Ivanciuc</h3>
                    <p></p>
                </article>

                <article className="aboutus__team--dejan">
                    <img src="#" alt="#" />
                    <h3>Dejan Rajković</h3>
                    <p></p>
                </article>

                <article className="aboutus__team--ekin">
                    <img src="#" alt="#" />
                    <h3>Ekin Cebeci</h3>
                    <p></p>
                </article>

                <article className="aboutus__team--lucian">
                    <img src="#" alt="#" />
                    <h3>Lucian Nguyen</h3>
                    <p></p>
                </article>

            </div>
        </section>
    );
};

export default AboutUs;
