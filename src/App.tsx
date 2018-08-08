import * as React from 'react';
import {Books} from "./components/Books";
import {BookStock} from "./core/book-stock";
import {NewBook} from "./components/NewBook";

class App extends React.Component {

  private stock = new BookStock();

  public render() {
    return (
        <div>
          <h1 className="App-title">My Books</h1>
          <NewBook stock={this.stock}/>
          <Books stock={this.stock}/>
        </div>
    );
  }
}

export default App;
