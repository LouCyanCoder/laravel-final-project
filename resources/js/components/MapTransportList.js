import React from "react";
import { Button } from "@mui/material";
import { DateTime } from "luxon";

const MapTransportList = ({ element }) => {
    return (
        <div>
            {" "}
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
                            <p>
                                Offer Created Time:{" "}
                                {DateTime.fromMillis(
                                    element.created_at * 1000
                                ).toFormat("hh:mm")}
                            </p>
                        </div>

                        <hr></hr>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default MapTransportList;
