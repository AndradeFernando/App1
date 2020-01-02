import React from 'react';
import {Text, View} from 'react-native';

interface Props {
  name: string;
}

class ShowTest extends React.Component<Props> {
  state = {
    handledString: '',
  };

  componentDidMount() {
    this.setState({handledString: 'handledString-->' + this.props.name});
  }

  render(): React.ReactNode {
    return (
      <>
        <View>
          <Text>Teste {this.state.handledString}</Text>
        </View>
      </>
    );
  }
}
export default ShowTest;
