import { FC } from 'react';
import Error from './Error';

const Card: FC<{cardData: any; children:any;}> = ({cardData, children}) => {

    return (
        <div className="ion-padding">
            {cardData.length ? 
                cardData.map((item:any, index:any) => {
                    return children(item, index);
                })
            : <Error error="No Repo's were found." />
            }
        </div>
    )
}

export default Card;