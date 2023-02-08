import { EmployeeList, Heading } from "./index";

const Home = () => {
  return (
    <div className="container mx-auto px-2 max-w-5xl">
      <h3 className="text-center text-3xl mt-10 leading-8 text-black font-bold tracking-wide uppercase">
        CRUD App with React Context API and Hooks
      </h3>
      <Heading />
      <EmployeeList />
    </div>
  );
};

export default Home;
