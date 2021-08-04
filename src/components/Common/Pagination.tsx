import { IonButton, IonIcon, IonContent, IonRouterLink } from '@ionic/react';
import { arrowForward, arrowBack } from 'ionicons/icons';
import React from 'react';

const Pagination = () => {
    return (
        <div style={{display: 'flex'}} className="ion-flex ion-padding ion-justify-content-between">
            <IonRouterLink href="/pages/2">
                <IonButton fill="outline" disabled>Prev <IonIcon slot="start" icon={arrowBack} /></IonButton>
            </IonRouterLink>

            <IonRouterLink href="/page/3">
                <IonButton fill="outline">Next <IonIcon slot="end" icon={arrowForward} /></IonButton>
            </IonRouterLink>
        </div>
    )
}

export default Pagination;