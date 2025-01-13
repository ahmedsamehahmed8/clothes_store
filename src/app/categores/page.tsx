import Categore from "@/componets/e_com/categore/Categore";
import { Stack } from "@mui/material";
import axios from "axios";
const categories = async () => {
  const s = await axios
    .get(`https://josn-server-clothes.vercel.app/categories`)
    .then((res) => res.data);
  return (
    <>
      <Stack
        direction="row"
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {s.map((category) => {
          return <Categore key={category.id} {...category} />;
        })}
      </Stack>
    </>
  );
};

export default categories;
