/* eslint-disable */

import React from 'react'
//import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

// Import media components
import InfoModal from '../components/media/modals.js/info'
import WatchModal from '../components/media/modals.js/watch'

import Category from '../components/media/category'

// Import media data
import VideoData from '../data/video-data'

let _this
class Video extends React.Component {
  constructor() {
    super()
    this.state = {
      showInfo: false,
      info: '',
      watchVideo: false,
      urlToWatch: '',
    }
    _this = this
  }

  render() {
    const siteTitle = 'Permissionless Software Foundation'

    return (
      <Layout>
        <Helmet title={siteTitle} />
        {/** Media */}
        {Category && (
          <>
            {VideoData.map((category, i) => {
              return (
                <Category
                  key={category.title}
                  id={`psf-media-${i}`}
                  title={category.title}
                  about={category.about}
                  onShowInfo={_this.toggleInfo}
                  onWatchVideo={_this.toggleVideo}
                  media={category.videos}
                />
              )
            })}
          </>
        )}
        {_this.state.showInfo && (
          <InfoModal
            info={_this.state.info}
            show={_this.state.showInfo}
            onHide={_this.toggleInfo}
          />
        )}
        {_this.state.watchVideo && (
          <WatchModal
            url={_this.state.urlToWatch}
            show={_this.state.watchVideo}
            onHide={_this.toggleVideo}
          />
        )}
        {/**  */}
      </Layout>
    )
  }

  async componentDidMount() {
    try {
      // Update the component state with token price from the server.
      // await this.getPrice()
    } catch (err) {
      console.log(`Error in video.js/componentDidMounts(): `, err)
    }
  }
  toggleInfo(info) {
    _this.setState({
      showInfo: !_this.state.showInfo,
      info,
    })
  }

  toggleVideo(urlToWatch) {
    _this.setState({
      watchVideo: !_this.state.watchVideo,
      urlToWatch,
    })
  }
}

export default Video
