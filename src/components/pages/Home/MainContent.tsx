import { FC } from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';
import Skeleton from '../../Common/Skeleton';
import Card from '../../Common/Card';

const MainContent: FC<{loading: boolean; data: any}> = ({loading, data}) => {
    return (
        <IonContent fullscreen>
          {
            loading ? <Skeleton /> : <Card cardData={data}>
                  {(singleData:any, index:string) => {
                    const  { id, name, description } = singleData.repository;
                    return <IonCard id={id+' '+index} key={id+index} className="ion-margin-bottom">
                      <IonCardHeader>
                          <IonCardTitle>{name}</IonCardTitle>
                      </IonCardHeader>

                      <IonCardContent>
                          <p>{description}</p>
                          <IonButton routerLink={`/releases/${name}`}>Releases</IonButton>
                      </IonCardContent>
                    </IonCard>
                  }}
            </Card>
          }
        </IonContent>
    )
}

export default MainContent;