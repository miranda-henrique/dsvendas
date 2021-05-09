import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import React from 'react';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <h1 className="text-primary">Olá, mundo!</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
