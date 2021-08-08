import { IonSkeletonText } from '@ionic/react';

const Skeleton = () => {
    return (
        <>  
            <div className="ion-padding custom-skeleton">
                <IonSkeletonText animated style={{ width: '60%' }} />
                <IonSkeletonText animated />
                <IonSkeletonText animated style={{ width: '88%' }} />
                <IonSkeletonText animated style={{ width: '70%' }} />
                <IonSkeletonText animated style={{ width: '60%' }} />
            </div>
            <div className="ion-padding custom-skeleton">
                <IonSkeletonText animated style={{ width: '60%' }} />
                <IonSkeletonText animated />
                <IonSkeletonText animated style={{ width: '88%' }} />
                <IonSkeletonText animated style={{ width: '70%' }} />
                <IonSkeletonText animated style={{ width: '60%' }} />
            </div>
            <div className="ion-padding custom-skeleton">
                <IonSkeletonText animated style={{ width: '60%' }} />
                <IonSkeletonText animated />
                <IonSkeletonText animated style={{ width: '88%' }} />
                <IonSkeletonText animated style={{ width: '70%' }} />
                <IonSkeletonText animated style={{ width: '60%' }} />
            </div>
            <div className="ion-padding custom-skeleton">
                <IonSkeletonText animated style={{ width: '60%' }} />
                <IonSkeletonText animated />
                <IonSkeletonText animated style={{ width: '88%' }} />
                <IonSkeletonText animated style={{ width: '70%' }} />
                <IonSkeletonText animated style={{ width: '60%' }} />
            </div>
            <div className="ion-padding custom-skeleton">
                <IonSkeletonText animated style={{ width: '60%' }} />
                <IonSkeletonText animated />
                <IonSkeletonText animated style={{ width: '88%' }} />
                <IonSkeletonText animated style={{ width: '70%' }} />
                <IonSkeletonText animated style={{ width: '60%' }} />
            </div>
        </>
    )
}

export default Skeleton;