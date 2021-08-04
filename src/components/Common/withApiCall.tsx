import React, { useState, useEffect, FC, ReactElement } from 'react';

const withApiCall = (Component: FC<{data: any}>, url: string) => {
    return function(){
        const [ resData, setData ] = useState([]);

        useEffect(() => {
            fetch(url)
                .then(res => res.json())
                .then(res => setData(res));
        }, []);

        return <Component data={resData} />
    };
}


export default withApiCall;