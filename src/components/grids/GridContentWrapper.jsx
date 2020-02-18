import React from 'react';
import '../../styles/grids/rowGrid.css';
import RowGrid from './RowGrid';
import TableWithFixedHeaderAndFirstCol from './TableWithFixedHeaderAndFirstCol';
import TableCells from './TableCells';
import TableHeader from './TableHeader';
import StickyColumn from './StickyColumn';
import styled from 'styled-components';

const CenterContent = styled.div.attrs({
    className: "CenterContent"
})`
    display: flex;
`;

const GridItem = styled.div.attrs({
    className: "GridItem",
})`
    width: 200px;
    background-color: orange;
    height: 50px;
    border: solid 5px white;
`;

const GridContentWrapper = props => {

    // return (<TableWithFixedHeaderAndFirstCol />)
    return (
        <div className="gridContentWrapper">
            <GridItem>NOTHING</GridItem>
            <TableHeader />

            <CenterContent>
                <StickyColumn />
                <TableCells />
            </CenterContent>

        </div>
    );
}

export default GridContentWrapper;