import {FC} from 'react';
import {Card, CardImage, CardContent,CardTitle} from './CardItem.style';

type CardItemProps = {
    img?: string;
    name?: string
};

const CardItem:FC<CardItemProps> = ({img, name}) => {
    return (
        <Card>
            <CardImage src={img} />
            <CardContent>
                <CardTitle>{name}</CardTitle>
            </CardContent>
        </Card>
    )
}

export default CardItem;
