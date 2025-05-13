import { ProductProjectProps } from "../products/product-project.interface";

export interface ProjectProps {
  project_id: number;
  project_name: string;
  products: ProductProjectProps[];
  project_description: string;
}
