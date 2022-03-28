import React from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";

const TransportList = ({ element }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem">
                    <div className="offerslisted__listitem--locationfrom">
                        <p>Location From: {element.location_from}</p>
                    </div>

                    <div className="offerslisted__listitem--destination">
                        <p>Destination: {element.destination}</p>
                    </div>

                    <div className="offerslisted__listitem--date">
                        <p>Transport Date: {element.date}</p>
                    </div>

                    <div className="offerslisted__listitem--maxperson">
                        <p>Max Person: {element.max_person}</p>
                    </div>

                    <div className="offerslisted__listitem--status">
                        <p>Status: {element.status}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>Offer Created Time: {element.created_at}</p>
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
