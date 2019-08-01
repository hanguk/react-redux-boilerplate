import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { SamplePage } from 'pages'

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={SamplePage} />
      </Switch>
    </div>
  )
}

export default App