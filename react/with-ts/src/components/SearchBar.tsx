import { SearchBarProps } from "components/types";
import React, { FormEvent } from "react";

export class SearchBar extends React.Component<SearchBarProps> {
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
    console.log("render SearchBar");
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
