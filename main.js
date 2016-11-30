function makeTemplate (state, setState) {
  return '<p>' + state.counter + '</p>'
}

const renderElement = document.getElementById('root')
const storage = createStorage(renderElement)

window.setInterval(() =>
  storage.setState({ counter: storage.getState().counter + 1 }
), 100)

function createStorage(renderElement) {
  var state = { counter: 0 }

  function setState(newState) {
    state = Object.assign({}, state, newState)
    render()
  }

  function render() {
    renderElement.innerHTML = makeTemplate(state, setState)
  }
  render()

  return {
    getState: () => Object.freeze(state),
    setState
  }
}

