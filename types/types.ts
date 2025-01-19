export type User = {
  userId: number;
  userName: string;
  products?: Product[];
};

export type Product = {
  id: number;
  productname: string;
  description: string;
  price: string;
  imageUrl: string | null;
  userId: string;
};
