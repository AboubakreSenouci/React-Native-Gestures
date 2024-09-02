import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { Dispatch, SetStateAction } from "react";

import { onBording } from "@/constants";
import {
  Directions,
  Gesture,
  GestureDetector,
} from "react-native-gesture-handler";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

const OnBordingScreen = ({
  selectedScreenIndex,
  setSelectedScreenIndex,
}: {
  selectedScreenIndex: number;
  setSelectedScreenIndex: Dispatch<SetStateAction<number>>;
}) => {
  const data = onBording[selectedScreenIndex];

  const handleOnPress = () => {
    if (selectedScreenIndex < onBording.length - 1) {
      setSelectedScreenIndex(selectedScreenIndex + 1);
    }
  };

  const onContinue = () => {
    if (selectedScreenIndex < onBording.length - 1) {
      setSelectedScreenIndex(selectedScreenIndex + 1);
    }
  };

  const onBack = () => {
    if (selectedScreenIndex > 0) {
      setSelectedScreenIndex(selectedScreenIndex - 1);
    }
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.LEFT).onEnd(onContinue),
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack)
  );

  return (
    <GestureDetector gesture={swipes}>
      <Animated.View
        style={styles.screenContainer}
        entering={FadeIn}
        exiting={FadeOut}
        key={selectedScreenIndex}
      >
        <View>
          <Image
            source={data.image}
            style={{ width: 327, height: 318, marginHorizontal: 44 }}
          />
        </View>
        <View style={{ gap: 25 }}>
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.description}>{data.description}</Text>
          <TouchableOpacity
            onPress={handleOnPress}
            style={styles.buttonConatinerStyle}
            activeOpacity={0.7}
          >
            <Text style={{ color: "#ffffff", fontSize: 18 }}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </GestureDetector>
  );
};

export default OnBordingScreen;

const styles = StyleSheet.create({
  screenContainer: {
    paddingTop: 130,
    paddingBottom: 60,
    gap: 30,
  },
  title: {
    fontSize: 25,
    fontWeight: "700",
    lineHeight: 48,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    paddingHorizontal: 20,
    color: "#949494",
  },
  buttonConatinerStyle: {
    backgroundColor: "#92E3A9",
    alignItems: "center",
    marginHorizontal: 40,
    borderRadius: 8,
    paddingVertical: 14,
  },
});
