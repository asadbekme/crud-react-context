import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Input } from "../ui";

const AddEmployee = () => {
  const { addEmployee, employees } = useContext(GlobalContext);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: employees.length + 1,
      name,
      company,
      job,
    };
    addEmployee(newEmployee);
    navigate("/");
  };

  return (
    <React.Fragment>
      <div className="w-full max-w-sm container mx-auto mt-32">
        <form onSubmit={onSubmit}>
          <Input label={"Name"} state={name} setState={setName} />
          <Input label={"Company"} state={company} setState={setCompany} />
          <Input label={"Job"} state={job} setState={setJob} />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-5 bg-green-500 w-full hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Employee
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

export default AddEmployee;
