import { useEffect, useReducer, FC } from 'react';
import PageWrapper from '../../Common/PageWrapper'
import { ReleaseApiLink } from '../../../config';
import Error from '../../Common/Error';
import MainContent from './MainContent';
import PageBanner from '../../Common/PageBanner';
import { initialState, reducer } from '../../../reducers/HomePageReducer';

const Home: FC<{ 
  match: {  
    params: { name: string; }; 
  }; 
}> = (props) => {
  // State
  const [ state, dispatch ] = useReducer(reducer, {...initialState});
  const  { loading, data, error } = state;
  const name = props.match.params.name;

  // Updating repo data to state
  useEffect(() => {
      fetch(ReleaseApiLink(name))
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
                value: res || []
              });
          });
  }, [name]);

  return (
    // main Wrapper, It will add header and footer
    <PageWrapper title="Releases">
      {!error ? 
        <>
          {/* Repo Name */}
          <PageBanner name={name} />
          
          {/* Main Content */}
          <MainContent loading={loading} data={data}/> 
        </>
        :
        // displaying error messege when api call cross limit
        <Error error={error} />
      }
    </PageWrapper>
  );
};

export default Home;
