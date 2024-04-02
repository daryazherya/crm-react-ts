import ReactDOM from 'react-dom/client'
import App from './index.tsx'
import './css/index.css';
import './css/main.css';
import './css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';


ReactDOM.createRoot(document.getElementById('root')!).render( 
<Provider store={store}>
    <App />
</Provider>
)
