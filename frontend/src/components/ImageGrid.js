import React from 'react';
import Gallery from 'react-grid-gallery';

const IMAGES = [{
  src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 174,
  caption: "After Rain (Jeshu John - designerspics.com)"
},
{
  src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212,
  tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
  caption: "Boats (Jeshu John - designerspics.com)"
},

{
  src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
  thumbnailWidth: 320,
  thumbnailHeight: 212
}]

class ImageGrid extends React.Component {
  constructor(props) {
		super(props);
  }
  render() {
    return (
        <div style={{
          display: "block",
          margin: "auto",
          minHeight: "1px",
          width: "90%",
          overflow: "auto"}}>
            <Gallery images={this.props.images} enableImageSelection={false} />
        </div>
    );
  }
}

export default ImageGrid;
