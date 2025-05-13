import { useLocalSearchParams } from "expo-router";
import ProductDetailView from "@/components/ProductDetailView";

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  return <ProductDetailView product_id={parseInt(id as string)} />;
}
