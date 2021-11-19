import React, { FormEvent } from "react";
import "./App.css";

type ViewProps = {
  children: React.ReactNode;
  row?: boolean;
};

type ProductCategoryRowProps = {
  category: string;
};

type Product = {
  category: string;
  price: string;
  stocked?: boolean;
  name: string;
};
type ProductRowProps = {
  product: Product;
};
const View = (props: ViewProps) => <div {...props} />;

class ProductCategoryRow extends React.Component<ProductCategoryRowProps> {
  render() {
    const category = this.props.category;
    console.log('render ProductCategoryRow ', category);
    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    );
  }
}

class ProductRow extends React.Component<ProductRowProps> {
  render() {
    const product = this.props.product;
    console.log('render ProductRow ', product.name);
    const name = product.stocked ? (
      product.name
    ) : (
      <span style={{ color: "red" }}>{product.name}</span>
    );

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

type ProductCriteria = {
  filterText: string;
  inStockOnly?: boolean;
};

type ProductTableProps = ProductCriteria & {
  products: Product[];
};

class ProductTable extends React.Component<ProductTableProps> {
  render() {
    console.log('render ProductTable');
    const filterText = this.props.filterText;
    const inStockOnly = this.props.inStockOnly;

    const rows: React.ReactElement[] = [];
    let lastCategory = "";

    this.props.products.forEach((product, index) => {
      console.log("indx ", index);
      if (product.name.indexOf(filterText) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category + index}
          />
        );
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

type SearchBarProps = Required<ProductCriteria> & {
  onFilterTextChange: (filter: string) => void;
  onInStockChange: (checked: boolean) => void;
};

class SearchBar extends React.Component<SearchBarProps> {
  constructor(props: SearchBarProps) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e: FormEvent<HTMLInputElement>) {
    this.props.onFilterTextChange(e.currentTarget.value);
  }

  handleInStockChange(e: FormEvent<HTMLInputElement>) {
    this.props.onInStockChange(e.currentTarget.checked);
  }

  render() {
    console.log('render SearchBar');
    return (
      <form>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />{" "}
          Only show products in stock
        </p>
      </form>
    );
  }
}

type FilterableProductTableProps = {
  products: Product[];
};
class FilterableProductTable extends React.Component<
  FilterableProductTableProps,
  Required<ProductCriteria>
> {
  constructor(props: FilterableProductTableProps) {
    super(props);
    this.state = {
      filterText: "",
      inStockOnly: false,
    };

    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText: string) {
    this.setState({
      filterText: filterText,
    });
  }

  handleInStockChange(inStockOnly: boolean) {
    this.setState({
      inStockOnly: inStockOnly,
    });
  }

  render() {
    console.log('render FilterableProductTable');
    return (
      <View>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </View>
    );
  }
}

const PRODUCTS = [
  {
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" },
];

const App = () => <FilterableProductTable products={PRODUCTS} />;

export default App;
