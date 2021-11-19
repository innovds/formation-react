import type { ProductRowProps } from "components/types";
import React from "react";

export class ProductRow extends React.Component<ProductRowProps> {
  render() {
    const product = this.props.product;
    console.log("render ProductRow ", product.name);
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
