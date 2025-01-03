type Tprofile = {
  profiles: {
    email: string;
    username: string;
    id: number;
    items: {
      id: number;
      name: string;
      img: string;
      price: number;
      category: string;
      quantity: number;
    }[];
  }[];
  loading: "idle" | "pending" | "failed" | "succeeded";
  error: string | null;
};

export default Tprofile;
