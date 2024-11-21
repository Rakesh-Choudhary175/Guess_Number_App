import { StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import Title from "../components/Title";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const [gussedNumber, setGussedNumber] = useState(
    generateRandomBetween(1, 100, userNumber)
  );

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <Text>{gussedNumber}</Text>
      <View>
        <Text>Higher or lower?</Text>
      </View>

      {/* <View>LOG Rounds</View> */}
      <Text>{userNumber}</Text>
      <PrimaryButton>Less</PrimaryButton>
      <PrimaryButton>More</PrimaryButton>
    </View>
  );
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
