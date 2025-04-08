import { ProductProjectProps } from "../../interfaces/products/product-project.interface";

export interface ProjectProps {
  project_id: number;
  project_name: string;
  products: ProductProjectProps[];
}
