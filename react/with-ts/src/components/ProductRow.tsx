import type { ProductRowProps } from "components/types";
import { FC, memo } from "react";
import { wait } from "utils";

const ProductRowE: FC<ProductRowProps> = ({ product }) => {
  wait(200);
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
};

export const ProductRow = memo(ProductRowE);
