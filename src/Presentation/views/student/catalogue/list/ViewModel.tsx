import React, { useContext } from "react";
import { CategoryContext } from "../../../../context/CategoryContext";

const StudentCatalogueListViewModel = () => {
  //const [categories, setCategories] = useState<Category[]>([]);
  const { categories, getCategories } = useContext(CategoryContext);

  return {
    categories,
    getCategories,
  };
};

export default StudentCatalogueListViewModel;
