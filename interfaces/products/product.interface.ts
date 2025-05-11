export interface ProductProps {
  product_id: number;
  product_name: string;
  product_price: number;
  product_provider_name: string;
  product_description: string;
  section_id: number;
  product_detailed_description?: string;
  product_quality_rating?: number;
  product_cost_rating?: number;
  product_shipment_rating?: number;
  provider_quality_rating?: number;
  provider_cost_rating?: number;
  provider_shipment_rating?: number;
}
