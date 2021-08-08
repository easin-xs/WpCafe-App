import React, { FC } from 'react';
import { IonPage, IonToolbar, IonHeader, IonTitle } from '@ionic/react';

const PageWrapper: FC<{title: string; children: any}> = ({title, children}) => {
    return (
        <IonPage className="ion-justify-content-start">
            <IonHeader>
                <IonToolbar color="primary">
                <IonTitle>WPCafe - {title ||  'Blank' }</IonTitle>
                </IonToolbar>
            </IonHeader>
            {children}
        </IonPage>
    );
}

export default PageWrapper;