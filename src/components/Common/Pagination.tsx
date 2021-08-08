import React, { FC } from 'react';
import { IonButton, IonIcon, IonText} from '@ionic/react';
import { arrowForward, arrowBack } from 'ionicons/icons';

const Pagination: FC<{currentPage: number; updatePagination: any}> = ({currentPage, updatePagination}) => {
    return (
        <div className="pagination-wrapper ion-flex ion-padding ion-justify-content-between ion-align-items-center">
            {currentPage > 1 && 
                <IonButton className="prev-page" onClick={() => updatePagination((currentPage - 1))} fill="outline">Prev <IonIcon slot="start" icon={arrowBack} /></IonButton>
            }
            <IonText className="pagination-count">{`Page: ${currentPage}`}</IonText>
            <IonButton className="next-page" onClick={() => updatePagination((currentPage + 1))} fill="outline">Next <IonIcon slot="end" icon={arrowForward} /></IonButton>
        </div>
    )
}

export default React.memo(Pagination);