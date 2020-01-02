import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './store';
import {PersistGate} from 'redux-persist/integration/react';
import AppNavigator from './navigation';

interface Props {}
interface State {}

class App extends React.Component<Props, State> {
  render(): React.ReactNode {
    return (
      <>
        {
          <Provider store={store}>
            <PersistGate persistor={persistor}>
              <AppNavigator />
            </PersistGate>
          </Provider>
        }
      </>
    );
  }
}
export default App;
