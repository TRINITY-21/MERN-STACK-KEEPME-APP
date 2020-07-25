import React from "react";
import ALertContext from "../../context/alert/alertContext";
import { useContext } from "react";

const Alerts = () => {
    const alertContext = useContext(ALertContext);
    const { alerts } = alertContext;

    return (
        alerts.length > 0 &&
        alerts.map((alert) => (
            <div key={alert.id} className={`alert alert-${alert.type}`}>
                <i className='fas fa-info-circle' /> {alert.msg}
            </div>
        ))
    );
};

export default Alerts;
