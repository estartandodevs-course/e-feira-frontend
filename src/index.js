import App from './App';
import { createRoot } from 'react-dom/client';
import Context from './contexts/Context'

// if (process.env.NODE_ENV === 'development') {
//   const { worker } = require('./mocks/browser')
//   worker.start()
// }

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Context>
    <App />
  </Context>
);
