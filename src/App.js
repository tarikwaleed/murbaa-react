// import { PrimeReactProvider } from 'primereact/api';

// export default function MyApp({ Component, pageProps }) {
//     return (
//         <PrimeReactProvider>
//             <Component {...pageProps} />
//         </PrimeReactProvider>
//     );
// }
import Home from './Home';

import { PrimeReactProvider } from 'primereact/api';

export default function MyApp() {
  return (
    <Home></Home>
  );
}