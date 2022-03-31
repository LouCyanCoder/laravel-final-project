import React, { Fragment } from "react";

const ContactInfoList = ({ element }) => {
    return (
        <div>
            <section className="userslisted_list">
                <article className="userslisted_listitem">
                    <div className="userslisted_list--name">
                        <hr></hr>
                        <p>
                            <strong>Name:</strong> {element.name}
                        </p>
                    </div>
                    <div className="userslisted_list--email">
                        <p>
                            <strong>E-mail:</strong> {element.email}
                        </p>
                    </div>
                    <div className="userslisted_list--phone">
                        <p>
                            <strong>Phone Number:</strong>{" "}
                            {element.phone_number}
                        </p>
                    </div>
                    <div className="userslisted_list--facebook">
                        <p>
                            <strong>Facebook:</strong> {element.facebook_link}
                        </p>
                    </div>
                    <div className="userslisted_list--telegram">
                        <p>
                            <strong>Telegram:</strong> {element.telegram_link}
                        </p>
                    </div>
                </article>
            </section>
        </div>
    );
};

export default ContactInfoList;
