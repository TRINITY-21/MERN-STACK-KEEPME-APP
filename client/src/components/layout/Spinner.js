import React, { Fragment } from "react";
import spinner from "./Double-Ring-spinner.gif";

export const Spinner = () => (
    <Fragment>
        <img
            src={spinner}
            alt='loading...'
            style={{
                width: "25%",
                margin: "auto",
                display: "block",
                marginTop: "18%",
            }}
        />
    </Fragment>
);

export default Spinner;
