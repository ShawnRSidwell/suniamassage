import Button from "./Button";

function Jumbotron() {
  return (
    <div className="">
      <div className=" flex items-center justify-center">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4 ">Welcome to Our Website</h1>
          <p className="text-lg mb-8 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Button className="px-6 py-3 bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
