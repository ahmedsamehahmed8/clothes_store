import Tloading from "./Tloading";
import Tuser from "./Tuser";

type Tauthslice = {
  user: Tuser;
  token: string;
  loading: Tloading;
  error: null | string;
  new_user?: boolean;
};

export default Tauthslice;
