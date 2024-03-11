
import React, { lazy, useEffect, useState } from 'react';


export default function Landing() {
    const [Component, setComponent] = useState<React.ReactNode>(null);


    useEffect(() => {
        if (typeof window !== 'undefined') {

            setComponent(lazy(() => import('remotereact/Landingpage')));

        }
    }, []);


    return (
        <div style={{ padding: '2%' }}>
            <h2>Client - LAnding page</h2>
            {Component && <Component />}
        </div>
    );
}
