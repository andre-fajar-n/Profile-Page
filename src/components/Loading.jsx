import React from "react";
import { FadeLoader } from "react-spinners";
import { css } from "@emotion/core";

const override = css`
display: blok;
margin: 0 auto;
border-color: red;
`;

export const Loading = () => {
    return <FadeLoader
        css={override}
        height={50}
        width={10}
        radius={25}
        margin={50}
        color={"#bac964"}
    />
}