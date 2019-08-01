import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sampleActions from 'store/modules/sample'
import Sample from 'components/Sample'

class SampleContainer extends Component {
  render () {
    return (
      <Sample />
    )
  }
}

export default connect(
  (state) => ({}),
  (dispatch) => ({
    SampleActions: bindActionCreators(sampleActions, dispatch)
  })
)(SampleContainer)