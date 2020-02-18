import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import './table4.css';
import TableHeader from './TableHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

class Table extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leftStop: [0],
        };
    }

    makeColumnsFixed(fixCol) {
        if (fixCol || fixCol === 0) {
            return 0;
        } else {

        }
    }

    componentDidMount() {
        this.makeColumnsFixed(this.props.fixCol);

        const element = document.getElementById('foo');
        if (element) {
            const positionInfo = element.getBoundingClientRect();
            const headerHeight = positionInfo.height + "px";
            console.log("headerHeight", headerHeight)
            this.setState({
                headerHeight
            });
        }
    }

    render() {

        const { data } = this.props;

        const rowCount = 20;
        const columnCount = data[0].length;
        const icon = <FontAwesomeIcon icon={faPencilAlt} fixedWidth />

        let rows = [];
        for (let x = 0; x < rowCount; x++) {
            const columns = [];
            for (let y = 0; y < columnCount; y++) {
                if (y === 0) {
                    columns.push(<td key={`${x}_${y}`} className={`col_${y}`}><span className="icon">{icon}</span></td>);
                } else {
                    columns.push(<td key={`${x}_${y}`} className={`col_${y}`}>{x} {y}</td>);
                }

            }
            rows.push(<tr key={`row${x}`}>{columns}</tr>)
        }

        return (
            <div className="tableContainer">
                <table>
                    <TableHeader headers={data[0]} />
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}

Table.propTypes = {
    data: PropTypes.array.isRequired
}
export default Table;