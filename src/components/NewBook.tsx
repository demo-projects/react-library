// @ts-ignore
import React, {Component} from 'react';

export class NewBook extends Component<any> {

  state = {title: '', description: '', genre: ''};

  setTitle = (title: string) => {
    this.setState({title})
  };

  setDescription = (description: string) => {
    this.setState({description})
  };

  setGenre = (genre: string) => {
    this.setState({genre})
  };

  render() {
    return (
        <div>
          <input type="text"
                 placeholder="title"
                 onChange={({target}) => this.setTitle(target.value)}
                 value={this.state.title}/>
          <input type="text"
                 placeholder="description"
                 onChange={({target}) => this.setDescription(target.value)}
                 value={this.state.description}/>
          <input type="text"
                 placeholder="genre"
                 onChange={({target}) => this.setGenre(target.value)}
                 value={this.state.genre}/>
          <button onClick={() => this.props.stock.addBookToCollection(this.state)}>Add</button>
        </div>
    )
  }
}