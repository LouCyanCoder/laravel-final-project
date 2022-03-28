import React from "react";
import { Button } from "@mui/material";

const AccommodationList = ({ accommodation }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem">
                    <div className="offerslisted__listitem--type">
                        <p>Type: {accommodation.type}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p>Description: {accommodation.description}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p>Offer Created Time: {accommodation.created_at}</p>
                    </div>

                    <Button variant="outlined">Options</Button>
                    <Button variant="outlined">Details</Button>
                    <hr></hr>
                </article>
            </div>
        </div>
    );
};

export default AccommodationList;
