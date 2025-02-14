import ListGroup from "./components/ListGroup";
import ListGroupTest from "./components/ListGroupTest";

function App() {
  //list of maps
  //ID = {name: "string", url: "https://blahblah", filtering content?: "tags"}

  const testList = [
    { name: "Can You See Me", url: "https://canyouseeme.app/" }
  ];
  
  let items = ["Can You See Me", "AI Content Describer", "IndentNav"];
  let filteredItems = ["AI Content Describer", "IndentNav", "Golden Cursor"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const handleSelectItemTest = (item: { name: string; url: string }) => {
    //window.location.href = item.url; // Redirects the user to the URL
    window.open(item.url, "_blank");
  };

  return (
  <div>
    <ListGroupTest items={testList} heading="Testing" onSelectItem={handleSelectItemTest} />
    <ListGroup items={items} heading="List of All Avaliable Tools"  onSelectItem={handleSelectItem} />
    <ListGroup items={filteredItems} heading="Highly Rated"  onSelectItem={handleSelectItem} />
    <ListGroup items={filteredItems} heading="JAWS compatible"  onSelectItem={handleSelectItem} />
    <ListGroup items={filteredItems} heading="NVDA add-ons"  onSelectItem={handleSelectItem} />
  </div>
  );
}

export default App;