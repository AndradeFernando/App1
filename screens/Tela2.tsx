import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name: string;
}

class Tela2 extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <>
        <View>
          <Text>Tela 2</Text>
        </View>
      </>
    );
  }
}
export default Tela2;
