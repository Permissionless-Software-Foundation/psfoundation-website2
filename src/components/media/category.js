import React from 'react'
import PropTypes from 'prop-types'
import MediaBox from './media-box'
import About from './about'
let _this
class Category extends React.Component {
  constructor(props) {
    super(props)
    _this = this
    this.state = {
      activeItem: {},
    }
    _this.scrollValue =
      window.innerWidth < 700 ? 1 : window.innerWidth < 1200 ? 2 : 3

    console.log('window.innerWidth', window.innerWidth, _this.scrollValue)
  }
  render() {
    const { id, title, about, media, hidenLeft, hidenRight } = _this.state
    const { onShowInfo, onWatchVideo } = _this.props
    return (
      <section key={id} className=" style1 media-category">
        <h1>{title}</h1>
        <div id={id} className="media-container">
          {!hidenLeft && (
            <div className="media-arrow-left">
              <i
                aria-hidden="true"
                className="icon fa-caret-left"
                onClick={() => _this.scrollTo(id, 'left')}
              ></i>
            </div>
          )}
          <div
            id={`${id}-mediaContainer`}
            className="media-container"
            key={`${id}-mediaContainer`}
          >
            {about && (
              <About
                id={id}
                key={`about-${id}`}
                about={about}
                onShowInfo={onShowInfo}
              />
            )}
            {media.map((val, i) => {
              return (
                <MediaBox
                  key={val.url + i}
                  onShowInfo={onShowInfo}
                  onWatchVideo={onWatchVideo}
                  {...val}
                />
              )
            })}
          </div>

          {!hidenRight && (
            <div className="media-arrow-right">
              <i
                aria-hidden="true"
                className="icon fa-caret-right "
                onClick={() => _this.scrollTo(id, 'right')}
              ></i>
            </div>
          )}
        </div>
      </section>
    )
  }
  static getDerivedStateFromProps(props, state) {
    if (!state.id) {
      return props
    } else {
      return null
    }
  }
  shouldComponentUpdate() {
    return false
  }

  // slider effect
  scrollTo(id, direction) {
    try {
      const { activeItem } = _this.state
      console.log(`activeItem`, activeItem)
      let _index
      try {
        _index = activeItem[id] || 0
      } catch (error) {
        _index = 0
      }

      let newIndex
      if (direction === 'left') {
        newIndex = _index - _this.scrollValue
      } else {
        newIndex = _index + _this.scrollValue
      }

      const element = document.getElementById(`${id}-mediaContainer`)

      const childs = element.childNodes
      if (!childs[newIndex]) return
      childs[newIndex].scrollIntoView({
        block: 'nearest',
        inline: 'center',
        behavior: 'smooth',
      })

      activeItem[id] = newIndex
      _this.setState({
        activeItem,
      })
    } catch (error) {
      console.warn(error)
    }
  }
}
Category.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  about: PropTypes.string,
  media: PropTypes.array,
  onShowInfo: PropTypes.func,
  onWatchVideo: PropTypes.func,
}
export default Category
