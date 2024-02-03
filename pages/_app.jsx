import { Provider } from 'react-redux'
import { store } from '../redux/store';
import { ToastContainer } from 'react-toastify';
import {persistStore} from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';
import AppProvider from '../context/AppContext';
import Preloader from '../components/preloader';

let persistor = persistStore(store)

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={<Preloader/>} persistor={persistor}>
        <AppProvider>
          <Component {...pageProps} />
          <ToastContainer />
        </AppProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default MyApp
