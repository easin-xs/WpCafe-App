import React, { FC, useEffect, useReducer } from 'react';
import Pagination from '../Common/Pagination';

const initialValue = {
    loading: true,
    data: [],
    page: 1
}
const reducer = (state:any, action:any) => {
    switch(action.type) {
        case 'set-data' :
            return {
                ...state,
                loading: false,
                data: action.value
            }
        case 'increment-page' :
            return {
                ...state,
                page: state.page++
            }
        default :
            return state;
    }
}

const RenderComponent: FC<{children: any; apiUrl: string; pagination: boolean}> = ({children, apiUrl, pagination=false}) => {
    const [ state, dispatch ] = useReducer(reducer, initialValue);

    // appended page number after api url if pagination true
    if(pagination){
        apiUrl += '&page=1' + (state.page);
    }

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                console.log('data')
                dispatch({
                    type: 'set-data',
                    value: res.items
                });
            });
    }, []);

    return (
        <>
            {children(state.data, state.loading)}
            <Pagination />
        </>
    )
}

export default RenderComponent;