import React from 'react';
import { ListType } from '../utils/TrelloService';
import styled from 'styled-components';
import { format, parseISO } from 'date-fns';
import Empty from '../components/Empty';

interface TableListWithCardsProps {
    list: ListType
}

const Box = styled.div`
    margin-bottom: 30px;    
`;

const Footer = styled.div`
 display: block; 
 page-break-before: always;
`;


const TableListWithCards = (props: TableListWithCardsProps) => {
    const { list } = props;
    
    const formatDate = (date: string) => {
        const objDate = parseISO(date);
        return format(objDate, 'dd/MM/yyyy HH:mm:ss');
    };

    return <Box>
        <div className="card">
            <div className="card-header">
                <div className="card-title">
                    <div className="h4 badge" data-badge={list.totalCard}>{list.name}</div>
                </div>
            </div>
            {list.totalCard === 0
                ? <Empty title="No cards found" />
                :
                <div className="card-body">
                    <table style={{ pageBreakInside: 'auto' }} className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th style={{ width: '150px' }}>URL</th>
                                <th style={{ width: '180px' }}>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.cards.map((card) => (
                                <tr key={card.id} style={{ pageBreakInside: 'avoid', pageBreakAfter: 'auto' }}>
                                    <td>{card.name}</td>
                                    <td><a href={card.shortUrl} target="_blank" rel="noopener noreferrer">{card.shortUrl}</a></td>
                                    <td>{formatDate(card.dateLastActivity)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Footer />
                </div>
            }
        </div>
    </Box>
}


export default TableListWithCards;