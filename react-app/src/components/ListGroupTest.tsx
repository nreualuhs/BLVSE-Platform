import { useState } from "react";

interface Item {
    name: string;
    url: string;
  }

interface Props {
    items: Item[];
    heading: string;
    onSelectItem: (item: Item) => void;
}

function ListGroupTest({items, heading, onSelectItem}: Props) {
    const [selectedIndex, setSelectedIndex] = useState(-1);


  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
          className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
          key={item.name} 
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(item);
            }}>
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroupTest;
