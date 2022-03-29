import React from "react";
import { Button } from "@mui/material";

const AccommodationList = ({ element }) => {
    return (
        <div>
            <div className="offerslisted__list">
                <article className="offerslisted__listitem--accommodation">
                    <div className="offerslisted__listitem--type">
                        <p><strong>Type:</strong></p>
                        <p>{element.type}</p>
                    </div>

                    <div className="offerslisted__listitem--description">
                        <p><strong>Description:</strong></p>
                        <p>{element.description}</p>
                    </div>

                    <div className="offerslisted__listitem--dateadded">
                        <p><strong>Offer Created Time:</strong></p>
                        <p>{element.created_at}</p>
                    </div>

                    
                    <Button variant="outlined" href={`/accommodation/${element.id}/edit`}>Edit</Button>
                    <Button variant="outlined">Delete</Button>
                    <hr></hr>
                </article>
            </div>
        </div>
    );
};

export default AccommodationList;
