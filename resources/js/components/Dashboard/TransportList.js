import React from "react";
import { Button } from "@mui/material";

const TransportList = ({ transport }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem">
                    <div className="offerslisted__listitem--locationfrom">
                        <p>Location From: {transport.location_from}</p>
                    </div>

                    <div className="offerslisted__listitem--destination">
                        <p>Destination: {transport.destination}</p>
                    </div>

                    <div className="offerslisted__listitem--date">
                        <p>Transport Date: {transport.date}</p>
                    </div>

                    <div className="offerslisted__listitem--maxperson">
                        <p>Max Person: {transport.max_person}</p>
                    </div>

                    <div className="offerslisted__listitem--status">
                        <p>Status: {transport.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>Offer Created Time: {transport.created_at}</p>
                    </div>
                    <Button variant="outlined">Options</Button>
                    <Button variant="outlined">Details</Button>
                    <hr></hr>
                </article>
            </div>
        </div>
    );
};

export default TransportList;
