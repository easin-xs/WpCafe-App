import React, { FC } from 'react';
import CardItem from './CardItem';

const Card: FC<{cardData: []}> = ({cardData}) => {
    return (
        <div className="ion-padding">
            {cardData.length ? 
                cardData.map((item, index) => {
                    return <CardItem key={index} singleData={item} />
                })
            : ''
            }
        </div>
    )
}

export default Card;