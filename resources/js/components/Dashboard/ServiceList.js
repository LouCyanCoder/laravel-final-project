import React from "react";
import { Button } from "@mui/material";

const ServiceList = ({ service }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem">
                    <div className="offerslisted__listitem--type">
                        <p>Service Name: {service.name}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p>Description: {service.description}</p>
                    </div>

                    <div className="offerslisted__listitem--status">
                        <p>Status: {service.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>Offer Created Time{service.created_at}</p>
                    </div>

                    <Button variant="outlined">Options</Button>
                    <Button variant="outlined">Details</Button>
                    <hr></hr>
                </article>
            </div>
        </div>
    );
};

export default ServiceList;
