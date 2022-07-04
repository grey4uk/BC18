import React from 'react';
import ImageGallery from 'components/ImageGallery/ImageGallery';

// const GalleryView = () => {
//   return <ImageGallery />;
// };

// export default GalleryView;

class GalleryView extends React.Component {
  state = { page: 3 };

  changePage = (value) => this.setState({ page: value });

  render() {
    const { changePage } = this;
    return (
      <ImageGallery
        perPage={this.state.page}
        onChange={changePage}
      />
    );
  }
}

export default GalleryView;
