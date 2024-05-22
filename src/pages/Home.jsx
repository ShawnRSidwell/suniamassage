import Card from "../ui/Card";
import Jumbotron from "../ui/Jumbotron";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Jumbotron />
      <Card />
    </div>
  );
}

export default Home;
