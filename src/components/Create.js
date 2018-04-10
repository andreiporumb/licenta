import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {

  constructor() {
    super();
    this.state = {
      isbn: '',
      title: '',
      author: '',
      description: '',
      published_year: '',
      publisher: ''
    };
  }
  onChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  onSubmit = (e) => {
    e.preventDefault();

    const { isbn, title, author, description, published_year, publisher } = this.state;

    axios.post('/api/book', { isbn, title, author, description, published_year, publisher })
      .then((result) => {
        this.props.history.push("/")
      });
  }

  render() {
    const { isbn, title, author, description, published_year, publisher } = this.state;
    return (
  
      <div class="container">
          <div>
      <link rel="stylesheet" href="assets/css/main.css" />
      
      <body class="is-preload">
      <header id="header">
				<a class="logo" href="index.html">Porumbescu Diagnosis</a>
				<nav>
					<a href="#menu">Menu</a>
				</nav>
			</header>

		
			<nav id="menu">
				<ul class="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="elements.html">About us</a></li>
					<li><a href="http://localhost:3000/">Contact</a></li>
				</ul>
			</nav>
      </body>
      </div>
     
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
              ADD A CAR THAT DOESN'T EXIST IN THE DATABASE
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span> Available Cars</Link></h4>
            <form onSubmit={this.onSubmit}>
              <div class="form-group">
                <label for="isbn">Brand:</label>
                <input type="text" class="form-control" name="isbn" value={isbn} onChange={this.onChange} placeholder="Please type here the brand of the car" />
              </div>
              <div class="form-group">
                <label for="title">Model:</label>
                <input type="text" class="form-control" name="title" value={title} onChange={this.onChange} placeholder="Pleasy type here the model of the car" />
              </div>
              <div class="form-group">
                <label for="author">Year of production:</label>
                <input type="text" class="form-control" name="author" value={author} onChange={this.onChange} placeholder="Year of production (YYYY)" />
              </div>
              <div class="form-group">
                <label for="description">Description:</label>
                <textArea class="form-control" name="description" onChange={this.onChange} placeholder="What are the common problems of the car" cols="80" rows="3">{description}</textArea>
              </div>
              <div class="form-group">
                <label for="published_date">Engine capacity:</label>
                <input type="number" class="form-control" name="published_year" value={published_year} onChange={this.onChange} placeholder="(ex: 1390)" />
              </div>
              <div class="form-group">
                <label for="publisher">Overall rating:</label>
                <input type="text" class="form-control" name="publisher" value={publisher} onChange={this.onChange} placeholder="From 1 to 10, is it a good car?" />
              </div>
              <button type="submit" class="btn btn-default">Submit</button>
              <a href="//C:\Users\andre\Desktop\Licenta2\mern-crud\index.html">Home</a>
            </form>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Create;