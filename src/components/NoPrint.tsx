import styled from 'styled-components'

const NoPrint = styled.div`
    @media print
    {    
        display: none !important;
    }
`;

export default NoPrint;