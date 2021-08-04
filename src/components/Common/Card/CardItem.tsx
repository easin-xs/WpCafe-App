import React, { FC } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton } from '@ionic/react';

const CardItem : FC<{singleData: any}>  = ({singleData}) => {
    return (
        <IonCard className="ion-margin-bottom">
            <IonCardHeader>
                <IonCardTitle>{singleData.repository?.name}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <p>{singleData.repository?.description}</p>
                <IonButton href="#">Releases</IonButton>
            </IonCardContent>
        </IonCard>
    )
}

export default CardItem;