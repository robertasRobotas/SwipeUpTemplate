import React from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import clip from '../../assets/video.mp4';

const post = () => {
  return (
    <View>
      <Video source={clip} />
    </View>
  );
};

export default post;
