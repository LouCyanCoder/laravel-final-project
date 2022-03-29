import React, { Fragment } from "react";

const ContactInfoList = ({ element }) => {
    return (
        <div>
            <Fragment className="userslisted_list">
                <article className="userslisted_listitem">
                    <div className="userslisted_list--name">
                        <p>Name: {element.name}</p>
                    </div>
                    <div className="userslisted_list--email">
                        <p>E-mail: {element.email}</p>
                    </div>
                    <div className="userslisted_list--phone">
                        <p>Phone Number: {element.phone_number}</p>
                    </div>
                    <div className="userslisted_list--facebook">
                        <p>Facebook: {element.facebook_link}</p>
                    </div>
                    <div className="userslisted_list--telegram">
                        <p>Telegram: {element.telegram_link}</p>
                    </div>
                </article>
            </Fragment>
        </div>
    );
};

export default ContactInfoList;
