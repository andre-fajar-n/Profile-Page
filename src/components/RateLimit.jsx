import React from "react";

export const RateLimit = (props) => {
    return (
        <div className="rate-limit">
            <strong>{props.rateLimit}</strong> request(s) left before rate-limit
        </div>
    )
}