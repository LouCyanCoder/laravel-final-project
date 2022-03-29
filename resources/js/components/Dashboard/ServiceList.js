import React from "react";
import { Button } from "@mui/material";

const ServiceList = ({ element }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem">
                    <div className="offerslisted__listitem--type">
                        <p>Service Name: {element.name}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p>Description: {element.description}</p>
                    </div>

                    <div className="offerslisted__listitem--status">
                        <p>Status: {element.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>Offer Created Time{element.created_at}</p>
                    </div>

                    <Button variant="outlined">Edit</Button>
                    <Button variant="outlined">Delete</Button>
                    <hr></hr>
                </article>
            </div>
        </div>
    );
};

export default ServiceList;
