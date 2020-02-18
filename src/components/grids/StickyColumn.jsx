import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/variables.css';
import '../../styles/grids/rowGrid.css';
import styled from 'styled-components';

const StickyColumnContent = styled.div.attrs({
    className: "StickyColumnContent"
})`
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    width: 200px;
    display: inline-block;
`;

const HeaderColumn = styled.div.attrs({
    className: "HeaderColumn"
})`
    display: grid;
    grid-template-rows: repeat(${props => props.rowCount}, 50px [row-start]);
    background-color: chartreuse;
`;

const GridItem = styled.div.attrs({
    className: "GridItem",
})`
    width: 200px;
    background-color: red;
    height: 50px;
    border: solid 5px white;
`;

const StickyColumn = props => {

    const { data } = props;

    const rowCount = 7;
    let names = [];
    for (let index = 0; index < rowCount; index++) {
        names.push(<GridItem key={index}>name {index}</GridItem>);
    }

    return (
        <StickyColumnContent>
            <HeaderColumn key="firstRowColumns" name="header" rowCount={rowCount}>
                {names}
            </HeaderColumn>
        </StickyColumnContent>
    );
}

StickyColumn.propTypes = {
    data: PropTypes.object
}
export default StickyColumn;