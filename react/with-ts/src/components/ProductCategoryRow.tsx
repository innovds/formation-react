import { ProductCategoryRowProps } from "components/types";
import React from "react";

export class ProductCategoryRow extends React.Component<ProductCategoryRowProps> {
  render() {
    const category = this.props.category;
    console.log("render ProductCategoryRow ", category);
    return (
      <tr>
        <th colSpan={2}>{category}</th>
      </tr>
    );
  }
}
