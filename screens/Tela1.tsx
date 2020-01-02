import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name: string;
}

class Tela1 extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <>
        <View>
          <Text>Tela 1</Text>
        </View>
      </>
    );
  }
}
export default Tela1;
