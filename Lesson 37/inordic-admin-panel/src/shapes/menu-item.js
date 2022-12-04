import PropTypes from "prop-types"

const menuItemShape = PropTypes.shape({
  link: PropTypes.string,
  text: PropTypes.string,
})

export {menuItemShape}