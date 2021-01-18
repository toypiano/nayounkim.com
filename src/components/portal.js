import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Portal extends Component {
  constructor(props) {
    super(props)
    this.el =
      typeof document !== 'undefined' ? document.createElement('div') : null
    this.portalRoot =
      typeof document !== 'undefined'
        ? document.getElementById(this.props.id)
        : null
  }

  componentDidMount() {
    this.portalRoot.appendChild(this.el)
  }

  componentWillUnmount() {
    this.portalRoot.removeChild(this.el)
  }

  render() {
    return this.el ? ReactDOM.createPortal(this.props.children, this.el) : null
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
}
