import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ImagesFillian, ImagesPippa } from './image_example.js';
export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={{fontWeight: 'bold',fontSize: 100,}}> 
        Pick a VTuber
        </Text>
      </View>
      <View style={styles.pictures}>
        <ImagesPippa />
        <ImagesFillian />
        <StatusBar style="auto" />
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  top:{
    flex: 0,
    paddingTop: 180,
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  pictures: {
    flex: 2,
    alignItems: 'center',
    paddingTop: 0,
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: "space-between",
    height: "100%",
    width: "auto",
  }
});
