import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      timerText: 0,
      imageDisplay: false
    }
    this.timer = null;
  }

  run = () => {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
      this.setState({ imageDisplay: false })
    } else {
      this.timer = setInterval(() => {
        let newTimer = this.state.timerText + 0.1;
        this.setState({ timerText: newTimer, imageDisplay: true })
      }, 100);

    }
  }

  reset = () => {
    clearInterval(this.timer);
    this.timer = null;
    this.setState({ timerText: 0, imageDisplay: false });
  }

  render() {
    const label = (this.state.timerText) === 0 ? "Run" : "Pause";
    return (
      <View style={styles.container}>
        {this.state.imageDisplay && <Image source={require('./sonic.gif')} style={{ zIndex: 1, width: 150, height: 150 }} />}
        <Image source={require('./cron.png')} />
        <Text style={styles.timerText}>{this.state.timerText.toFixed(1)}</Text>
        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={this.run}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.reset}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

  },
  timerText: {
    color: '#baa07a',
    fontSize: 60,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: -150,
  },
  buttonArea: {
    flexDirection: 'row',
    height: 40,
    marginTop: 80,
    zIndex: 0
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#886532',
    height: 40,
    borderRadius: 5,
    margin: 10
  },
  buttonText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#ffffff'
  }
});
