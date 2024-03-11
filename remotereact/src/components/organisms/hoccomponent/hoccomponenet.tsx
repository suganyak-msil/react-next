import React from "react";
import Headercomponent from "../header/headercomponent";



const withLayout = (PageComponent: any) => {
    return function WithPage({ ...props }) {
        return (
            <div>
                <Headercomponent />

                <PageComponent />



            </div>
        );
    };
};

export default withLayout;