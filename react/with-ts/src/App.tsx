import { Checkbox } from "components/Checkbox";
import { Clock } from "components/Clock";
import { FilterableProductTable } from "components/FilterableProductTable";
import { Horloge } from "components/Horloge";
import { useControl, useToggle } from "hooks";
import { useEffect, useRef } from "react";
import "./App.css";

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const App = () => {
  const [clock, toggleClock] = useToggle(false);
  const [horloge, toggleHorloge] = useToggle(true);
  const nomControl = useControl("");
  const prenomControl = useControl("ex");
  const checkControl = useControl(false);
  const nomEl = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nomEl.current && nomEl.current.focus();
  }, []);

  console.log(
    "nom, prenom, check : ",
    nomControl.value,
    prenomControl.value,
    checkControl.value
  );
  return (
    <>
      Nom : <input type="text" {...nomControl} ref={nomEl} /> <br />
      Prénom : <input type="text" {...prenomControl} /> <br />
      check : <Checkbox {...checkControl} /> <br />
      {clock && <Clock />}
      {horloge && <Horloge />}
      <FilterableProductTable products={PRODUCTS} />
      <button onClick={toggleClock}>Afficher / cacher clock </button>
      <button onClick={toggleHorloge}>Afficher / cacher horloge </button>
    </>
  );
};

export default App;
