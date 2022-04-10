import React from "react";
import items from "../data/items";
import Item from "./Item";

class ShoppingList extends React.Component {
  state = {
    selectedCategory: 'All'
  };

  handleCategoryChange = (e) => {
    this.setState({selectedCategory: e.target.value});
  }

  displayItems = () => {
    return (
      items.filter((item) => {
        if (this.state.selectedCategory === 'All') return true;
        return item.category === this.state.selectedCategory;
      }).map((item) => {
        return <Item key={item.id} name={item.name} category={item.category} />
      })
    )
  }

  render() {
    return (
      <div className="ShoppingList">
        <div className="Filter">
          <select name="filter" onChange={this.handleCategoryChange}>
            <option value="All">Filter by category</option>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Dessert">Dessert</option>
          </select>
        </div>
        <ul className="Items">
          {this.displayItems()}
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
