export type Product = {
  category: string;
  price: string;
  stocked?: boolean;
  name: string;
};
export type ProductCriteria = {
  filterText: string;
  inStockOnly?: boolean;
};


export type ViewProps = {
  children: React.ReactNode;
  row?: boolean;
};

export type ProductCategoryRowProps = {
  category: string;
};

export type ProductRowProps = {
  product: Product;
};


export type ProductTableProps = ProductCriteria & {
  products: Product[];
};


export type FilterableProductTableProps = {
  products: Product[];
};

export type SearchBarProps = Required<ProductCriteria> & {
  onFilterTextChange: (filter: string) => void;
  onInStockChange: (checked: boolean) => void;
};
