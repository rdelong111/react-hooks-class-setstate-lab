import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

class App extends React.Component {
  state = {
    items: itemData,
    isDarkMode: false
  };

  handleDarkMode = () => {
    this.setState(prevState => {
      return {isDarkMode: !prevState.isDarkMode};
    });
  }

  render() {
    return (
      <div className={"App " + (this.state.isDarkMode ? "dark" : "light")}>
        <header>
          <h2>Shopster</h2>
          <button onClick={this.handleDarkMode}>
            {this.state.isDarkMode ? "Dark" : "Light"} Mode
          </button>
        </header>
        <ShoppingList items={this.state.items} />
    </div>
    )
  }
}

export default App;
