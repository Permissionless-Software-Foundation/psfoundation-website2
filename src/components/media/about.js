import React from 'react'

let _this
class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      about: '',
      seeMore: false,
    }
    _this = this
  }
  render() {
    const { about, id, seeMore } = _this.state
    const { onShowInfo } = _this.props
    return (
      <section className="style1 media-content">
        <div id={`${id}-about`} className="box about-box ">
          <p>{about}</p>
          {seeMore && (
            <div className="see-more-container">
              <button className="button" onClick={() => onShowInfo(about)}>
                Read more
              </button>
            </div>
          )}
        </div>
      </section>
    )
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.about) {
      return props
    } else {
      return null
    }
  }

  componentDidMount() {
    setTimeout(() => {
      _this.cutText()
    }, 400)
  }

  cutText() {
    try {
      const { id } = _this.state
      const element = document.getElementById(`${id}-about`)
      const childList = element.childNodes
      const child = childList[0]
      if (child.scrollHeight >= element.clientHeight - 50) {
        _this.setState({
          seeMore: true,
        })
      }
    } catch (error) {
      console.warn(error)
    }
  }
}

export default About
