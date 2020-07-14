import React from 'react';
import ImageGrid from './ImageGrid';

class Food extends React.Component {

  constructor(props) {
		super(props);
  }

  render() {
    return (
        <div>
            <h1>FOOOOOD</h1>
            <p>🍴yum🥄</p>
            <ImageGrid images={this.props.images}></ImageGrid>
        </div>
    );
  }
}

export default Food;
