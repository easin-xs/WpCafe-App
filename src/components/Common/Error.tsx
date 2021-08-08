import { FC } from 'react';
import { IonText, IonButton, IonRouterLink } from '@ionic/react';

const Error: FC<{error: any}> = ({error}) => {
    return (
        <div className="ion-text-center">
            <IonText color="danger" className="ion-padding">
                <h4>{error}</h4>
            </IonText>
            {/* Direct reload link, because first router change did not solve the limit error, that's why need refrash  */}
            <IonRouterLink routerLink='/'>
                <IonButton color="secondary">Go Home</IonButton>
            </IonRouterLink>
        </div>
    )
}

export default Error;