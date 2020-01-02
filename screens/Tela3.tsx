import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name: string;
}

class Tela3 extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <>
        <View>
          <Text>Tela 3</Text>
        </View>
      </>
    );
  }
}
export default Tela3;
