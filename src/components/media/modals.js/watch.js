import React from 'react'
import Modal from 'react-modal'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#242943',
    maxWidth: '80%',
  },
}
let _this
class WatchModal extends React.Component {
  constructor(props) {
    super(props)

    _this = this
  }
  render() {
    const { url, show, onHide } = _this.props
    const embedUrl = `https://www.youtube.com/embed/${url}`
    return (
      <Modal
        isOpen={show}
        onRequestClose={onHide}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="media-modal-watch youtube-responsive-container">
          <iframe
            width="560"
            height="315"
            src={embedUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="kickoff"
            style={{ padding: '10px' }}
          />
        </div>
      </Modal>
    )
  }
}

export default WatchModal
