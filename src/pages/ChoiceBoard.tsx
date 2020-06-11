import React, { useState } from 'react';
import styled from 'styled-components';
import SelectBoards from '../components/SelectBoards';
import Chip from '../components/Chip';
import { Link } from "react-router-dom";
import { BoardType, ListType, fetchLists } from '../utils/TrelloService';
import Container from '../components/Container';

const Box = styled.div`
    width: 400px;
    height: 400px;
`;

const ChoiceBoard = () => {
    const [lists, setLists] = useState<ListType[]>([]);    
    const [board, setBoard] = useState<BoardType>();

    const handleSelectedBoard = (boardSelected?: BoardType) => {
        if (boardSelected) {
            setBoard(boardSelected);            
            fetchLists(boardSelected.id)
                .then((lists) => {
                    setLists(lists);
                });
        }
        else{
            setBoard(undefined);
            setLists([]);
        }
    };

    return <Container>
        <Box>
            <div className="card">
                <div className="card-header">
                    <div className="card-title h5">React Trello Report</div>
                </div>
                <div className="card-body">
                    <SelectBoards onSelect={(board) => handleSelectedBoard(board)} />
                    {/*lists.length > 0 && lists.map((list) => <Chip key={list.id} text={list.name} />)*/}
                </div>
                <div className="card-footer">
                    {board
                        ? <Link className="btn btn-primary" to={`/board/${board.id}`}>Generate</Link>
                        : <button className="btn btn-primary" disabled >Generate</button>
                    }
                </div>
            </div>
        </Box>
    </Container>
}

export default ChoiceBoard;