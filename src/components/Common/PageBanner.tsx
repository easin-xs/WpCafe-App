import { FC } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { IonText, IonCardHeader, IonIcon, IonButton } from '@ionic/react';
import { arrowBack } from 'ionicons/icons';

const PageBanner:FC<{name: string}> = ({ name }) => {
    const history = useHistory();

    return (
        <IonCardHeader className="page-banner-wrapper">
            
            <IonButton onClick={() => history.goBack()} color="secondary"><IonIcon icon={arrowBack}></IonIcon>Back</IonButton>
           
            <IonText className="ion-padding-start" color="primary">
                {name.toUpperCase()}
            </IonText>
        </IonCardHeader>
    )
}

export default PageBanner;