
import React, { lazy, useEffect, useState } from 'react';

// const Component=lazy(() => import('remotereact/Button'));
export default function Button() {
    const [Component, setComponent] = useState<React.ReactNode>(null);
    const [Component2, setComponent2] = useState<React.ReactNode>(null);
    const [value, setValue] = useState("host");

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // console.log((lazy(() => import('remotereact/Button'))))
            setComponent(lazy(() => import('remotereact/Button')));
            setComponent2(lazy(() => import('remotereact/Card')));
        }
    }, []);

    const onValueChange = (val: string) => {
        setValue(val)
    }
    return (
        <div style={{ padding: '2%' }}>


            <h2>Client - Button</h2>
            {Component && <Component />}
            {Component && <Component2 title="from host" content="to client" onchange={onValueChange} />}
          <h1>
          {value}  
            </h1> 
        </div>
    );
}
