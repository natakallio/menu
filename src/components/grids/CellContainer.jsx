import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CellContainerWrapper = styled.div.attrs({
    className: "CellContainer_wrapper"
})`
    width: 100%;
    white-space: normal;
`;

const TallCell = styled.div.attrs({
    className: "TallCell"
})`
    height: 80px;
`;

class CellContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fixPos: 0,
        };
    }

    render() {
        const {x , y} = this.props;

        if (x === 1 && y === 5) {
            return (
                <CellContainerWrapper>
                    Some long text dfjasdlkj sdsklfjlkasd dl ldsksdfj aslkd jlkssd flkasjs jklsdfdj  jdaslkf asdld
                </CellContainerWrapper>
            );
        }
        if (x === 2 && y === 5) {
            return (
                <TallCell>
                    Tall cell
                </TallCell>
            );
        }
        return (
            <CellContainerWrapper>
                {this.props.x} {this.props.y}
            </CellContainerWrapper>
        );
    }
}

CellContainer.propTypes = {
    data: PropTypes.object
}
export default CellContainer;