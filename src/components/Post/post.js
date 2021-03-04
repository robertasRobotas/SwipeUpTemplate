import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Text } from 'react-native';
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
          repeat={false}
          paused={isPaused}
        />
      </TouchableWithoutFeedback>

      <View style={styles.infoContainer}>
        <View style={styles.rightContainer}>
          <Text>right</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.username}>@name</Text>
          <Text>Description cdwcewf wefefew few f ewf</Text>
          <Text>#tag1 #tag2</Text>
        </View>
      </View>
    </View>
  );
};
export default post;
