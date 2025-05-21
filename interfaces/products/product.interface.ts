import { ProviderProps } from "../providers/providers.interface.ts";

export interface ProductProps extends ProviderProps{
  product_id: number;
  product_name: string;
  product_price: number;
  product_description: string;
  section_id: number;
  product__detailed_description?: string;
  product_quality_rating?: number;
  product_cost_rating?: number;
  product_shipment_rating?: number;
  provider_quality_rating?: number;
  provider_cost_rating?: number;
  provider_shipment_rating?: number;
}
