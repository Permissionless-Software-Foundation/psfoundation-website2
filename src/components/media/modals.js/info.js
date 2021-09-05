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
    minWidth: '50%',
  },
}
let _this
class InfoModal extends React.Component {
  constructor(props) {
    super(props)

    _this = this
  }
  render() {
    const { info, show, onHide } = _this.props
    return (
      <Modal
        isOpen={show}
        onRequestClose={onHide}
        style={customStyles}
        contentLabel="Info"
        ariaHideApp={false}
      >
        <div className="modal-body">
          <p>{info}</p>
        </div>
        <div className="modal-footer">
          <button className="button" onClick={onHide}>
            close
          </button>
        </div>
      </Modal>
    )
  }
}

export default InfoModal
