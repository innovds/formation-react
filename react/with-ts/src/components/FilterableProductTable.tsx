import { ProductTable } from "components/ProductTable";
import { SearchBar } from "components/SearchBar";
import { FilterableProductTableProps } from "components/types";
import { View } from "components/View";
import { memo, useState } from "react";

export const FilterableProductTable = memo(({
  products,
}: FilterableProductTableProps): React.ReactElement => {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  console.log("render FilterableProductTable");
  return (
    <View>
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockChange={setInStockOnly}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </View>
  );
});
/*
extends React.Component<
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
    console.log("render FilterableProductTable");
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
*/
