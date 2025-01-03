import Tproducts from "./Tproducts";
import Tloading from "./Tloading";

type Tcart_items = {
  item_id: { [key: string]: number };
  item_info: Tproducts[];
  loading: Tloading;
  error: string | null;
};

export default Tcart_items;
