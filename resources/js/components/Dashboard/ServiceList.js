import React from "react";
import { Button } from "@mui/material";

const ServiceList = ({ element }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem--service">
                    <div className="offerslisted__listitem--type">
                        <p><strong>Service Name:</strong></p>
                        <p>{element.name}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p><strong>Description:</strong></p>
                        <p>{element.description}</p>
                    </div>

                    <div className="offerslisted__listitem--status">
                        <p><strong>Status:</strong></p>
                        <p>{element.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p><strong>Offer Created Time</strong></p>
                        <p>{element.created_at}</p>
                    </div>

                    <div className="offerslisted__listitem--buttons">
                        <Button variant="outlined"><a href="#">Edit</a></Button>
                        <Button variant="contained" color="error"><a href="#">Delete</a></Button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default ServiceList;
