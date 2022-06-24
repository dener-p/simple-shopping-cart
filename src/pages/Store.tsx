import { StoreItem } from "../components/StoreItem";
import itens from "../data/itens.json";

export const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-3">
        {itens.map((i) => (
          <StoreItem {...i} key={i.id} />
        ))}
      </div>
    </>
  );
};
