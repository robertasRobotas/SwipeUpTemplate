import React, { useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import Video from 'react-native-video';
import clip from '../../assets/video.mp4';
import styles from './styles';

const post = () => {
  const [isPaused, setPaused] = useState(false);

  console.log('clip', clip);
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={() => setPaused(!isPaused)}>
        <Video
          style={styles.video}
          source={clip}
          resizeMode={'cover'}
          onError={(e) => console.log(e)}
          repeat={true}
          paused={isPaused}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};
export default post;
