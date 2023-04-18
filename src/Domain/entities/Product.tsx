export interface Product {
  id?: string;
  name: string;
  image: string;
  points: number;
  stock?: number;
  status: string;
  category_id: string | undefined;
  category: string
  total_points?: number;
}
