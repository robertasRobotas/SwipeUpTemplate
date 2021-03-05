import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Text, Image } from 'react-native';
import Video from 'react-native-video';
import clip from '../../assets/video.mp4';
import styles from './styles';
import userPhoto from '../../assets/userPhoto.png';
import { Entypo } from 'react-native-vector-icons';

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
          <View style={styles.userPhotoContainer}>
            <Image style={styles.userPhoto} source={userPhoto} />
          </View>

          <View style={styles.iconContainer}>
            <Entypo style={styles.icon} name='star' size={40} />
            <Text style={styles.iconText}>Remember</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo style={styles.icon} name='message' size={40} />
            <Text style={styles.iconText}>Message</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo style={styles.icon} name='share' size={40} />
            <Text style={styles.iconText}>Share</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.username}>@name</Text>
          <Text style={styles.description}>
            Description cdwcewf wefefew few f ewf
          </Text>
          <Text style={styles.tags}>#tag1 #tag2</Text>
        </View>
      </View>
    </View>
  );
};
export default post;
