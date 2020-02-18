import React from 'react';
import PropTypes from 'prop-types';
import './gridFlexContainer.css';
import './gridFlex.css';
import GridFlexCell from './GridFlexCell';
import GridFlexColumn from './GridFlexColumn';

const createGridColumn = (columnNum, rowCount) => {

    let cells = [<GridFlexCell key={`header${columnNum}`}>headed {columnNum}</GridFlexCell>];
    for (let x = 1; x <= rowCount; x++) {
        cells.push(<GridFlexCell key={`row_${x}${columnNum}`}>row {x} {columnNum}</GridFlexCell>)
    }
    return <GridFlexColumn key={`column_${columnNum}`} columnNum={columnNum}>{cells}</GridFlexColumn>;
}

const GridFlex = props => {

    const {data} = props;

    const columnCount = 100;
    const rowCount = 70;

    let columns = [];
    for (let y = 0; y < columnCount; y++) {
        columns.push(createGridColumn(y, rowCount));
    }

    return (
        <div className="gridFlexContainer">
            <div className="gridFlex">
                {columns}
            </div>
        </div>
    );
}

GridFlex.propTypes = {
    data: PropTypes.object
}
export default GridFlex;