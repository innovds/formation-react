import React from "react";
import { FilterableProductTableProps, ProductCriteria } from "components/types";
import { SearchBar } from "components/SearchBar";
import {ProductTable} from "components/ProductTable";
import { View } from "components/View";

export class FilterableProductTable extends React.Component<
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
