import * as React from 'react';
import DataTable from 'react-data-table-component';
import ExpandedComponent from './ExpandedComponent';
import { cars, columns } from './data';

function MyComponent() {
  const carsAno = cars.map(car => ({
    ...car,
    disabled: Number(car.ano) < 2015,
  }));

  const carsMoreExpensive = carsAno.map(car => ({
    ...car,
    preco: parseFloat(car.preco.replace('$', '').replace(/,/g, '')),
  }));

  const mostExpensiveCar = carsMoreExpensive.reduce((maxCar, currentCar) => {
    return currentCar.preco > maxCar.preco ? currentCar : maxCar;
  }, carsMoreExpensive[0]);

  const carsWithExpansion = carsMoreExpensive.map(car => ({
    ...car,
    defaultExpanded: car === mostExpensiveCar,
  }));

  return (
    <DataTable
      title="Top 10 carros do mundo"
      columns={columns}
      data={carsWithExpansion}
      expandableRows
      expandableRowsComponent={ExpandedComponent}
      expandableRowExpanded={row => row.defaultExpanded}
      expandableRowDisabled={row => row.disabled}
    />
  );
}

export default MyComponent;
