import React, { useState, useEffect } from 'react';
import { CardType, ListType, fetchCards } from '../utils/TrelloService';
import Empty from './Empty';

interface CardsProps {
    list: ListType
}

const Cards = (props: CardsProps) => {
    const { list } = props;
    const [loadingCard, setLoadingCard] = useState(false);
    const [cards, setCards] = useState<CardType[]>([]);

    const CardTemplate = (card: CardType) => (
        <div className="card my-2" key={card.id}>
            <div className="card-header">
                <div className="card-title h5">
                    {card.name}
                    <span className={`chip float-right ${card.closed ? '' : 'bg-success'}`}>{card.closed ? 'close' : 'open'}</span>
                </div>
                <div className="card-subtitle text-gray">{card.shortUrl}</div>
            </div>
            {card.desc ? <div className="card-body">{card.desc}</div> : ''}
        </div>
    );

    useEffect(() => {
        setLoadingCard(true);
        fetchCards(list.id).then((cards) => {
            setCards(cards);
            setLoadingCard(false);
        });
    }, [list]);


    return <>
        {loadingCard
            ? <progress className="progress" max="100"></progress>
            : cards.length <= 0 ? <Empty title="No cards found" /> : cards.map((card) => CardTemplate(card))}
    </>
}

export default Cards;