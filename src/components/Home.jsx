import { EmployeeList, Heading } from "./index";

const Home = () => {
  return (
    <div className="container mx-auto max-w-5xl px-[10px]">
      <h2 className="text-center text-3xl mt-8 leading-8 text-black font-bold uppercase">
        CRUD App with React Context API and Hooks
      </h2>
      <Heading />
      <EmployeeList />
    </div>
  );
};

export default Home;
