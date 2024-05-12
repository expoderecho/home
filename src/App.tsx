import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  // const list = ["Goku", "Tanjiro", "Eren"];

  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
  };

  const [data, setData] = useState(["Goku", "Tanjiro", "Eren"]);

  const handleAdd = () => {
    setData([...data, "Minion"]);
  };

  const handleRemove = () => {
    setData(data.slice(0, -1));
  };

  return (
    <Card>
      <Button onClick={handleAdd}>Agregar</Button>
      <Button onClick={handleRemove}>Eliminar</Button>
      {/* <CardBody title={"Buenas tardes"} text={"Este es el texto"} /> */}
      <List data={data} onSelect={handleSelect} />
    </Card>
  );
}

export default App;
