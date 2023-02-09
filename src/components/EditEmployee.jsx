import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

const EditEmployee = () => {
  const { editEmployee, employees } = useContext(GlobalContext);
  const params = useParams();
  const navigate = useNavigate();
  const existingEmployee = employees.filter((employee) => employee.id === +params.id);
  const { name, company, job } = existingEmployee[0];
  const [values, setValues] = useState({
    name: name,
    company: company,
    job: job,
  });

  const handleEditEmployee = (e) => {
    e.preventDefault();
    const updatedEmployee = {
      id: +params.id,
      name: values.name,
      company: values.company,
      job: values.job,
    };
    editEmployee(updatedEmployee);
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mx-auto mt-32">
        <form onSubmit={handleEditEmployee}>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name of employee
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="company"
            >
              Company
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:text-gray-600 focus:outline-none"
              value={values.company}
              onChange={(e) => setValues({ ...values, company: e.target.value })}
              type="text"
              placeholder="Enter company"
            />
          </div>
          <div className="w-full mb-5">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="job"
            >
              Job
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:text-gray-600"
              value={values.job}
              onChange={(e) => setValues({ ...values, job: e.target.value })}
              type="text"
              placeholder="Enter job"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-5 bg-green-500 w-full hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Edit Employee
            </button>
          </div>
          <div className="text-center mt-4 text-gray-500">
            <Link to="/">Cancel</Link>
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditEmployee;
