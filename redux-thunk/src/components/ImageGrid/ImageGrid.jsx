import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { handleImageLoad } from "../../thunk/imagesThunk";
import Button from "../Button";
import Stats from "../Stats";

import "./styles.css";

const ImageGrid = (props) => {

  useEffect(() => {
    props.handleImageLoad();
  })

    const {images, errors, isLoading, imageStats} = props;

    return (
      <div className="content">
        <section className="grid">
          {images.map((image, index) => {
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
          onClick={this.props.handleImageLoad}
          loading={isLoading}>
          {" "}
          Load Images{" "}
        </Button>
      </div>
    );
  }

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  images: state.images,
  error: state.error,
  imageStats: state.imageStats
});

const mapDispatchToProps = (dispatch) => ({
  handleImageLoad: () => dispatch(handleImageLoad()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);
