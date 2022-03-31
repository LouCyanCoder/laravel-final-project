import React, { useState } from "react";
import ReactDOM from "react-dom";

const AboutUs = () => {
    return (
        <section className="aboutus">
            <div className="aboutus__container">
                <h2>Who are we and why did we do this?</h2>
                <p>
                    We are a group of people who have decided to connect other
                    people of goodwill with people who are struggling.
                </p>

                <p>Trying to make change in the world every day.</p>

                <p>Because sometimes all you need to change a life...</p>

                <p>
                    ...is to be the one <strong>who cares.</strong>
                </p>
            </div>

            <div className="aboutus__groupphoto">
                <img
                    src="../images/aboutusphoto.jpg"
                    alt="Group photo of the Who Cares team"
                />
                <figcaption>
                    <strong>
                        Pictured from left to right:
                        <br />
                        Dejan Rajković, Lucian Nguyen, Ekin Cebeci, Gheorghi
                        Ivanciuc
                    </strong>
                </figcaption>
            </div>

            <div className="aboutus__team__container">
                <h2>The minds behind this project.</h2>

                <article className="aboutus__team">
                    <div className="aboutus__team--img">
                        <img
                            src="../images/gheorghi_profile.jfif"
                            alt="gheorghi_profile"
                        />
                    </div>

                    <div className="aboutus__team--description">
                        <h3>Gheorghi Ivanciuc</h3>

                        <p>The idea for this project came to me through Lucian's inspiration to help others. Since I am a person affected by the conflict in Ukraine (I have many friends and relatives there), I decided to propose some changes and we started working on such a project that a lot of people need. Who Cares brought me a lot of knowledge in terms of backend and I am extremely happy to be part of this team. I hope that in the future we will be able to support and develop the project without any problems, there will be many real examples when our development paid off all the costs (for us, one happy life is the very goal).</p>
                    </div>
                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="aboutus__team--social-icons">
                            <li>
                                <a
                                    class="github"
                                    href="https://github.com/Geogranula"
                                    target="_blank"
                                >
                                    <strong>Github &nbsp;</strong>
                                    <i class="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    class="linkedin"
                                    href="https://www.linkedin.com/in/gheorghiivanciuc/"
                                    target="_blank"
                                >
                                    <strong>LinkedIn &nbsp;</strong>
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="aboutus__team">
                    <div className="aboutus__team--img">
                        <img
                            src="../images/dejan_profile.jpg"
                            alt="dejan_profile"
                        />
                    </div>

                    <div className="aboutus__team--description">
                        <h3>Dejan Rajković</h3>

                        <p>I'm Dejan Kokovic &#128540; </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="aboutus__team--social-icons">
                            <li>
                                <a
                                    class="github"
                                    href="https://github.com/dejan-creator"
                                    target="_blank"
                                >
                                    <strong>Github &nbsp;</strong>
                                    <i class="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    class="linkedin"
                                    href="https://www.linkedin.com/in/dejanrajkovic/"
                                    target="_blank"
                                >
                                    <strong>LinkedIn &nbsp;</strong>
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="aboutus__team">
                    <div className="aboutus__team--img">
                        <img
                            src="../images/ekin_profile.jfif"
                            alt="ekin_profile"
                        />
                    </div>

                    <div className="aboutus__team--description">
                        <h3>Ekin Cebeci</h3>
                        <p>
                            The idea behind this project was finding people "who
                            care" for the people who need help. We took this
                            journey to change the world better than it is right
                            now and helping the people who are struggling in
                            Ukraine because of the Russian occupation. Thank you
                            for all of my team mates for pushing their limits to
                            make our baby grow and become online in such a short
                            time.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="aboutus__team--social-icons">
                            <li>
                                <a
                                    class="github"
                                    href="https://github.com/ekincbc"
                                    target="_blank"
                                >
                                    <strong>Github &nbsp;</strong>
                                    <i class="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    class="linkedin"
                                    href="https://www.linkedin.com/in/ekincebeci/"
                                    target="_blank"
                                >
                                    <strong>LinkedIn &nbsp;</strong>
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>

                <article className="aboutus__team">
                    <div className="aboutus__team--img">
                        <img
                            src="../images/lucian_profile.jpg"
                            alt="lucian_profile"
                        />
                    </div>

                    <div className="aboutus__team--description">
                        <h3>Lucian Nguyen</h3>

                        <p>
                            Through this project we have became a great team,
                            through success and frustration, we held together to
                            the very end. The projects central idea was based on
                            the desire to see the world change for the better.
                            Now off we go to the developers world.
                            I have learned a lot of how a professional web development is done and all the basics that make the vision become a reality.
                        </p>
                    </div>

                    <div class="col-md-4 col-sm-6 col-xs-12">
                        <ul class="aboutus__team--social-icons">
                            <li>
                                
                                <a
                                    class="github"
                                    href="https://github.com/LouCyanCoder"
                                    target="_blank"
                                >
                                    <strong>Github &nbsp;</strong>
                                    <i class="fa fa-github"></i>
                                </a>
                            </li>
                            <li>
                                <a
                                    class="linkedin"
                                    href="https://www.linkedin.com/in/lucian-nguyen-4aa223162/"
                                    target="_blank"
                                >   
                                    <strong>LinkedIn &nbsp;</strong>
                                    <i class="fa fa-linkedin"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default AboutUs;
