import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import Markdown from 'react-markdown';
import { Link } from "react-router-dom";
import { fetchLists, fetchBoard, fetchCards, ListType, BoardType } from '../utils/TrelloService';
import TableListWithCards from '../components/TableListWithCards';

const Board: React.SFC = () => {
    let { boardId } = useParams();
    const [boardTrello, setBoardTrello] = useState<BoardType>();
    const [listsTrello, setListsTrello] = useState<ListType[]>([]);
    const handleBoardFetch = (boardId: string) => fetchBoard(boardId).then((board) => board && setBoardTrello(board));    
    const getCardsByListId = async (listId: string) => await fetchCards(listId).then((cards) => cards);    
    const handleListFetch = (boardId: string) => {
        fetchLists(boardId).then((lists: ListType[]) => {
            if (lists) {
                Promise.all(lists.map(async(list:ListType) => {
                    const cards = await getCardsByListId(list.id);   
                    list.totalCard = cards.length;   
                    list.cards = cards;               
                    return list;
                }))
                .then((lists: ListType[]) => setListsTrello(lists));
            }
        });
    };

    useEffect(() => {
        handleBoardFetch(boardId);
        handleListFetch(boardId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boardId]);

    return <div className="container">
        <div>
            <div className="h1">{boardTrello?.name}</div>
            <Link to="/" className="btn btn-link">Back</Link>
            <p><a href={boardTrello?.shortUrl} className="text-gray" target="_blank" rel="noopener noreferrer">{boardTrello?.shortUrl}</a></p>            
        </div>
        
        {listsTrello.map((list) => <TableListWithCards key={list.id} list={list} />)}
    </div>
}

export default Board;