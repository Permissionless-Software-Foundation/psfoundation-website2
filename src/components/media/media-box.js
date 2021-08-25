import React from 'react'
import PropTypes from 'prop-types'

// for thumbnails , 'default.jpg', '0.jpg',  '1.jpg' ... 3.jpg'
let imgSize = 'sddefault.jpg' //  'maxresdefault.jpg',
let _this
class MediaBox extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      url: '',
    }
  }
  render() {
    const { url, info } = _this.state
    const { onShowInfo, onWatchVideo } = _this.props
    const thumbUrl = `https://img.youtube.com/vi/${url}/${imgSize}`
    return (
      <div className="media-content">
        <section className="grid-wrapper">
          <div className="col-12">
            <img src={thumbUrl} alt={url} />
            <div className="col-12 media-btn-container">
              <button
                onClick={() => onShowInfo(info)}
                type="button"
                className="button  media-btn"
              >
                Info
              </button>
              <button
                onClick={() => onWatchVideo(url)}
                type="button"
                className="button  media-btn"
              >
                Watch
              </button>
            </div>
          </div>
        </section>
      </div>
    )
  }
  static getDerivedStateFromProps(props, state) {
    if (!state.url) {
      return props
    } else {
      return null
    }
  }
  shouldComponentUpdate() {
    return false
  }
}
MediaBox.propTypes = {
  url: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  onShowInfo: PropTypes.func,
  onWatchVideo: PropTypes.func,
}

export default MediaBox
