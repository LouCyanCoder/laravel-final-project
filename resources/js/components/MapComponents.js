import React, { Fragment } from "react";

const MapComponents = ({ Component, arry }) => {
    return (
        <Fragment>
            {arry.map((element, index) => (
                <Component key={index} element={element} />
            ))}
        </Fragment>
    );
};

export default MapComponents;
