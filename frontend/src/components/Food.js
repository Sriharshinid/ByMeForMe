import React from 'react';
import ImageGrid from './ImageGrid';

const serverDomain = 'https://by-me-for-me-backend.herokuapp.com/api/'

class Food extends React.Component {

  constructor(props) {
		super(props);
		this.state = {pics: []};
  }
  
  componentWillMount() { 
    fetch(serverDomain + 'myImages')
        .then(res => res.json())
        .then((data) => {
          var arr = data["_embedded"]["myImages"];
          var picArr = [];
          arr.forEach(pic => {
            var obj = {
              src: serverDomain + pic["fullPath"],
              thumbnail: serverDomain + pic["fullPath"],
              caption: pic["description"]
            };
            picArr.push(obj);
          });
          this.setState({ pics: picArr });
          console.log(picArr);
        })
        .catch(console.log)
	}

  render() {
    return (
        <div>
            <h1>FOOOOOD</h1>
            <p>🍴yum🥄</p>
            <ImageGrid images={this.state.pics}></ImageGrid>
        </div>
    );
  }
}

export default Food;
