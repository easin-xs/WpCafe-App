import { FC } from 'react';
import { IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonCardSubtitle } from '@ionic/react';
import Skeleton from '../../Common/Skeleton';
import Card from '../../Common/Card';

const MainContent: FC<{loading: boolean; data: any}> = ({loading, data}) => {
    return (
        <IonContent fullscreen>
          {
            loading ? <Skeleton /> : <Card cardData={data}>
                  {(singleData:any, index:string) => {
                    const  { tag_name, id, published_at } = singleData;
                    return <IonCard id={id+' '+index} key={id+index} className="ion-margin-bottom">
                      <IonCardHeader>
                          <IonCardTitle>Version: {tag_name}</IonCardTitle>
                          <IonCardSubtitle>ID: {id}</IonCardSubtitle>
                      </IonCardHeader>

                      <IonCardContent>
                          <p>Date: {(new Date(published_at)).toLocaleDateString('en-GB')}</p>
                      </IonCardContent>
                    </IonCard>
                  }}
            </Card>
          }
        </IonContent>
    )
}

export default MainContent;