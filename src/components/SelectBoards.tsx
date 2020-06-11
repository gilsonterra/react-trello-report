import React, { useState, useEffect, ChangeEvent } from 'react';
import { BoardType, fetchBoards } from '../utils/TrelloService';

interface SelectBoardProps {
    onSelect(board?: BoardType): void
}

const SelectBoards = (props: SelectBoardProps) => {
    const { onSelect } = props;
    const [boards, setBoards] = useState<BoardType[]>([]);
    const [loading, setLoading] = useState(false);

    const handleFetchBoard = () => {
        setLoading(true);
        fetchBoards().then((boards) => {
            setBoards(boards);
            setLoading(false);
        });
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const boardSelected = boards.find((b) => b.id === e.target.value);
        onSelect(boardSelected);
    };

    useEffect(() => {
        handleFetchBoard();
    }, []);

    return <div className="form-group">
        <label className="form-label">Choice the board</label>
        <select className="form-select" disabled={loading} onChange={(e) => handleChange(e)}>
            <option value="">{loading ? 'Loading...' : ''}</option>
            {boards.map((board) => <option key={board.id} value={board.id}>{board.name}</option>)}
        </select>
    </div>
}

SelectBoards.defaultProps = {
    onSelect: () => { }
}

export default SelectBoards;