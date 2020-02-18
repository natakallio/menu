import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/navbar/Navbar';
import Router from './router/Router';
import NavbarWithBrand from './components/navbarWithBrandAndLastItem/Navbar';
// import GridContentWrapper from './components/grids/GridContentWrapper';
// import GridTest from './components/grids/GridTest';
// import TableComponent from './components/grids/TableComponent';
// import TablePresentation from './components/grids/TablePresentation';
import GridPresentation from './components/grid/GridPresentation';
import { salaryTipes } from './data/salaryTypes';
// import Table from './components/table/Table';
import makeGridHeader from './generalFunctions/makeGridHeader';
import GridFlex from './components/gridFlex/GridFlex';
import StyledTable from './components/table/StyledTable';
import WithTableData from './components/table/WithTableData';

const router = new Router({mode: 'history', root: '/'});
router.addRoute("/cloud", (e) => console.log("e", e));

function App() {
  return (
    <div className="App">
      {/* <Navbar router={router} />
      <NavbarWithBrand router={router} /> */}

      {/* <GridContentWrapper /> */}
      {/* <GridTest /> */}
      {/* <TableComponent /> */}
      {/* <TablePresentation /> */}
      {/* <GridPresentation data={{salaryTipes}} /> */}
      {/* <GridFlex /> */}
      {/* <Table data={[makeGridHeader(salaryTipes).map(x => x.cellText)]} /> */}

      {/* <StyledTable tableData={[makeGridHeader(salaryTipes).map(x => x.cellText)]} fixColumnCount={2} /> */}

      <WithTableData render={
        (tableData, fixColumnCount) => (
          <StyledTable tableData={tableData} fixColumnCount={fixColumnCount} />
        )
      } />
    </div>
  );
}

export default App;
