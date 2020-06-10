/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { BoardType, ListType, fetchLists, fetchCards } from '../utils/TrelloService';
import Cards from './Cards';
import Empty from './Empty';

interface ListsProps {
    board: BoardType
}

const Lists = (props: ListsProps) => {
    const { board } = props;
    const [lists, setLists] = useState<ListType[]>([]);
    const [loadingList, setLoadingList] = useState(false);
    const [listSelected, setListSelected] = useState<ListType>();
    const handleListSelected = (listSelected?: ListType) => setListSelected(listSelected);


    const ListTemplate = (list: ListType) => {
        const active = listSelected && listSelected.id === list.id ? 'active' : '';
        return <li className={`tab-item ${active}`} key={list.id}>            
            <a href="#" onClick={() => handleListSelected(list)}>
                {list.name}
            </a>
        </li>
    };

    useEffect(() => {
        setLoadingList(true);
        fetchLists(board.id).then((lists) => {
            const [list] = lists;
            setLists(lists);
            setListSelected(list);
            setLoadingList(false);
        });
    }, [board])

    return <>
        {loadingList
            ? <progress className="progress" max="100"></progress>
            : lists.length <= 0 ? <Empty title="No lists found" /> : <ul className="tab tab-block">{lists.map((list) => ListTemplate(list))} </ul>
        }
        {listSelected ? <Cards list={listSelected}></Cards> : ''}
    </>
}


export default Lists;