
import { Provider } from 'react-redux'
import { store } from './components/state/store'
import DashBoard from './components/Dashboard'


function App() {
  return (
    <>
        <Provider store={store}>
          <DashBoard />
        </Provider >
    </>
  )
}

export default App
