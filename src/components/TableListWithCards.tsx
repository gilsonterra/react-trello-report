import React from 'react';
import { ListType } from '../utils/TrelloService';
import styled from 'styled-components';

interface TableListWithCardsProps {
    list: ListType
}

const Box = styled.div`
    margin-top: 20px;    
`;

const Footer = styled.div`
 display: block; 
 page-break-before: always;
`;


const TableListWithCards = (props: TableListWithCardsProps) => {
    const { list } = props;
    return <Box>
        <div className="card">
            <div className="card-header">
                <div className="card-title h3 badge" data-badge={list.totalCard}>{list.name}</div>
            </div>
            <div className="card-body">
                <table style={{ pageBreakInside: 'auto' }} className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th style={{ width: '150px' }}>URL</th>
                            <th style={{ width: '200px' }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {list.cards.map((card) => (
                            <tr key={card.id} style={{ pageBreakInside: 'avoid', pageBreakAfter: 'auto' }}>
                                <td>{card.name}</td>
                                <td><a href={card.shortUrl} target="_blank" rel="noopener noreferrer">{card.shortUrl}</a></td>
                                <td>{card.dateLastActivity}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Footer />
            </div>
        </div>
    </Box>
}


export default TableListWithCards;