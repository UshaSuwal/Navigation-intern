import React from 'react';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import Counter from './src/components/counter/Counter';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
        <Counter/>
      </PersistGate>
    </Provider>
  );
}

// import React from 'react';
// import { Provider } from 'react-redux';
// import { store } from './src/store/store';
// import { NavigationContainer } from '@react-navigation/native';
// import RootNavigator from './src/navigation/RootNavigator';

// export default function App() {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <RootNavigator />
//       </NavigationContainer>
//     </Provider>
//   );
// }
