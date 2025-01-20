export type User = {
  userId: string;
  userName: string;
  products?: Product[];
};

export type Product = {
  id: string;
  productname: string;
  description: string;
  price: string;
  imageUrl: string | null;
  userId: string;
};
