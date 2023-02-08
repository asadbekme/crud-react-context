import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import EmployeeItem from './EmployeeItem';

const EmployeeList = () => {
  const { employees } = useContext(GlobalContext);
  
  return (
    <React.Fragment>
      {employees.length > 0 ? (
        <>
          {employees.map((employee) => (
            <EmployeeItem employee={employee} />
          ))}
        </>
      ) : (
        <p className="text-center bg-gray-100 text-gray-500 py-5">No data.</p>
      )}
    </React.Fragment>
  );
};

export default EmployeeList;