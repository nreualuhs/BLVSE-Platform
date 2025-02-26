//import ListGroup from "./components/ListGroup";
import ListGroupTest from "./components/ListGroupTest";
import Title from "./components/Title";
import TableGroup from "./components/TableGroup";

function App() {
  //list of maps
  //ID = {name: "string", url: "https://blahblah", filtering content?: ["tags"]}

  //goals to accomplish
  // - add a page to the website
  // - add rating system (add material UI?)
  // - make it a proper table

  const testList = [
    {name: "Can You See Me", url: "https://canyouseeme.app/", rating: "5/5"}, 
    {name: "AI Content Describer", url: "https://github.com/cartertemm/AI-content-describer", rating: "4/5"},
    {name: "IndentNav", url: "https://github.com/mltony/nvda-indent-nav", rating: "5/5"}
  ];
  
  //let items = ["Can You See Me", "AI Content Describer", "IndentNav"];
  //let filteredItems = ["AI Content Describer", "IndentNav", "Golden Cursor"];

  /*const handleSelectItem = (item: string) => {
    console.log(item);
  }*/

  const handleSelectItemTest = (item: { name: string; url: string }) => {
    window.open(item.url, "_blank");
  };

  return (
  <div>
    <Title title="Access Code Hub"/>
    <TableGroup></TableGroup>
  </div>
  );
}

export default App;

/*<ListGroupTest items={testList} heading="List of All Avaliable Tools" onSelectItem={handleSelectItemTest} />
<ListGroup items={items} heading="List of All Avaliable Tools"  onSelectItem={handleSelectItem} />
    <ListGroup items={filteredItems} heading="Highly Rated"  onSelectItem={handleSelectItem} />
    <ListGroup items={filteredItems} heading="JAWS compatible"  onSelectItem={handleSelectItem} />
    <ListGroup items={filteredItems} heading="NVDA add-ons"  onSelectItem={handleSelectItem} />*/