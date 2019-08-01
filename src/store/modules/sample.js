import { createAction, handleActions } from 'redux-actions'

import { Map } from 'immutable'

const SAMPLE = 'sample/SAMPLE'

export const sample = createAction(SAMPLE)

const initialState = Map({
  sample: null
})

export default handleActions({
  [SAMPLE]: (state, action) => {
    return state
  }
}, initialState)