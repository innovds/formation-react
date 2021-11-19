import { ProductCategoryRow } from "components/ProductCategoryRow";
import { ProductRow } from "components/ProductRow";
import type { ProductTableProps } from "components/types";
import React from "react";

export class ProductTable extends React.Component<ProductTableProps> {
  render() {
    console.log("render ProductTable");
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
