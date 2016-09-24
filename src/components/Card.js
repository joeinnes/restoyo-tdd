import React, { Component } from 'react';

class Card extends Component {
  render() {
    let data = this.props.data || {};
    let id = data.id || "";
    let image = data.image || "";
    let title = data.title || "";
    let description = data.description || "";

    return (
      <div className="card is-fullwidth" id={id}>
        <div className="card-image">
          <figure className="image is-square">
            <img src={image} alt={data.title} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-5">{title}</p>
            </div>
          </div>

          <div className="content">
            {description}
          </div>
        </div>

        <footer className="card-footer">
          <a className="card-footer-item"><i className="fa fa-thumbs-o-down"></i></a>
          <a className="card-footer-item"><i className="fa fa-info-circle"></i></a>
          <a className="card-footer-item"><i className="fa fa-thumbs-o-up"></i></a>
        </footer>
      </div>
    );
  }
}

export default Card;