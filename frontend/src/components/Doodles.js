import React from 'react';
import ImageGrid from './ImageGrid';

class Doodles extends React.Component {
  constructor(props) {
		super(props);
  }
  
  render() {
    return (
        <div>
            <h1>DOOOOOODLES</h1>
            <p>wow look at all this ~art~👩🏾‍🎨</p>
            <ImageGrid images={this.props.images}></ImageGrid>
        </div>
    );
  }
}

export default Doodles;
