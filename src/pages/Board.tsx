import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
//import Markdown from 'react-markdown';
import { Link } from "react-router-dom";
import { fetchLists, fetchBoard, fetchCards, ListType, BoardType } from '../utils/TrelloService';
import TableListWithCards from '../components/TableListWithCards';
import styled from 'styled-components';
import Loading from '../components/Loading';
import Empty from '../components/Empty';
import NoPrint from '../components/NoPrint';

const Box = styled.div`
    width: 90vw;  
    @media print {
        width: 100vw; 
    }
`;

const Board: React.SFC = () => {
    let { boardId } = useParams();

    const [boardTrello, setBoardTrello] = useState<BoardType>();
    const [listsTrello, setListsTrello] = useState<ListType[]>([]);
    const [loading, setLoading] = useState(false);

    const handleBoardFetch = (boardId: string) => fetchBoard(boardId).then((board) => board && setBoardTrello(board));

    const getCardsByListId = async (listId: string) => await fetchCards(listId).then((cards) => cards);

    const handleListFetch = (boardId: string) => {
        setLoading(true);
        fetchLists(boardId).then((lists: ListType[]) => {
            if (lists) {
                Promise.all(lists.map(async (list: ListType) => {
                    const cards = await getCardsByListId(list.id);
                    list.totalCard = cards.length;
                    list.cards = cards;
                    return list;
                })).then((lists: ListType[]) => {
                    setListsTrello(lists);
                    setLoading(false);
                });
            }
        });
    };
    
    const handlePrint = () => {
        window.print();
    };

    useEffect(() => {
        handleBoardFetch(boardId);
        handleListFetch(boardId);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [boardId]);

    return <Box className="container">
        <div className="columns">
            <div className="column col-6">
                <div className="h3">{boardTrello?.name || ''}</div>
                <p><a href={boardTrello?.shortUrl} target="_blank" rel="noopener noreferrer">{boardTrello?.shortUrl}</a></p>
            </div>
            <div className="column col-6">
                <NoPrint>
                    <div className="float-right" style={{ marginTop: 20 }}>
                        <button className="btn btn-lg btn-primary" onClick={(e) => handlePrint()} style={{marginRight: 5}}>Print</button>
                        <Link to="/" className="btn btn-lg">Back</Link>
                    </div>
                </NoPrint>
            </div>
        </div>        
        {loading
            ? <Loading />
            : listsTrello.length <= 0 ? <Empty title="No list found" /> : listsTrello.map((list) => <TableListWithCards key={list.id} list={list} />)
        }
    </Box>
}

export default Board;