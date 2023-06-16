import React, { Component } from "react";
import { connect } from "react-redux";
import { loadImages } from "../../actions";
import Button from "../Button";
import Stats from "../Stats";

import "./styles.css";

class ImageGrid extends Component {
  componentDidMount() {
    this.props.loadImages();
  }

  render() {
    const { images, errors, isLoading, imageStats } = this.props;
    return (
      <div className="content">
        <section className="grid">
          {images.map((image, index) => {
            console.log(imageStats)
            return (
            <div
              key={image.id + index}
              className={`item item-${Math.ceil(image.height / image.width)}`}>
              <Stats stats={imageStats[image.id]} />
              <img src={image.urls.small} alt={image.user.username} />
            </div>
          )})}
        </section>
        {errors && <div className="error">{JSON.stringify(errors)}</div>}
        <Button
          onClick={isLoading ? () => {} : this.props.loadImages}
          loading={isLoading}>
          {" "}
          Load Images{" "}
        </Button>
      </div>
    );
  }
}

const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
  isLoading,
  images,
  error,
  imageStats
});

const mapDispatchToProps = (dispatch) => ({
  loadImages: () => dispatch(loadImages()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
