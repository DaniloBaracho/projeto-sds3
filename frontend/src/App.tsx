import React from 'react';
import './App.css';
import NavBar from 'components/NavBar';
import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import BarChart from 'components/BarChart';
import DonutChart from 'components/DonutChart';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dash Board Vendas</h1>
        <DataTable />
      </div>
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Taxa de sucesso</h5>
          <BarChart />
        </div>

        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Todas Vendas</h5>
          <DonutChart />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
