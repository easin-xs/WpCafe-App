import { useEffect, useReducer, FC, useCallback } from 'react';
import PageWrapper from '../../Common/PageWrapper'
import { HomeApiLink } from '../../../config';
import Pagination from '../../Common/Pagination';
import Error from '../../Common/Error';
import MainContent from './MainContent';
import { initialState, reducer } from '../../../reducers/HomePageReducer';

const Home: FC<{ 
  match: {  
    params: { id: number; }; 
  }; 
}> = (props) => {
  // State
  const [ state, dispatch ] = useReducer(reducer, {...initialState, page: (props.match.params.id ? Number(props.match.params.id) : 1)});
  const  { loading, data, error, page } = state;

  // Updating repo data to state
  useEffect(() => {
      fetch(HomeApiLink(page))
          .then(res => res.json())
          .then(res => {
              // if api cross limit, setting error message
              if(res.message){
                dispatch({
                  type: 'error',
                  value: res.message
                });
                return false;
              }
              
              // updating data
              dispatch({
                type: 'add-repo',
                value: (res.items && res.items.length) ? res.items : []
              });
          });
  }, [page]);

  // Pagination: updating the state data
  const updatePagination = useCallback((pageNumber:number) => {
    // change the url, so that after refrash, page get the actual result
    window.history.replaceState(null, '', `/page/${pageNumber}`);

    dispatch({
      type: 'update-page',
      value: pageNumber
    });
  }, []);

  return (
    // main Wrapper, It will add header and footer
    <PageWrapper title="Home">

      {!error ? 
        <>
          {/* Main Content */}
          <MainContent loading={loading} data={data}/>

          {/* Pagination */}
          <Pagination currentPage={page} updatePagination={updatePagination}/>
        </> :

        // displaying error messege when api call cross limit
        <Error error={error} />
      }
    </PageWrapper>
  );
};

export default Home;
