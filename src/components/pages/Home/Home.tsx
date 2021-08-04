import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSkeletonText } from '@ionic/react';
import './Home.css';
import Skeleton from '../../Common/Skeleton';
import withApiCall from '../../Common/withApiCall';
import RenderComponent from '../../Common/RenderComponent'
import Card from '../../Common/Card';

const Home: React.FC = (props) => {
  console.log('home')
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <RenderComponent apiUrl='https://api.github.com/search/code?q=addClass+user:mozilla&per_page=5' pagination={true}>
          {(data:any, loading: boolean) => loading ? <Skeleton /> : <Card cardData={data} />}
        </RenderComponent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
