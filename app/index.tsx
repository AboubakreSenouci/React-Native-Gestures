import { useState } from "react";
import OnBordingScreen from "@/components/on-bording-screen";
import { SafeAreaView } from "react-native-safe-area-context";
import Pagination from "@/components/pagination";
("../constants/index");

export default function Index() {
  const [selectedScreenIndex, setSelectedScreenIndex] = useState(0);
  return (
    <SafeAreaView>
      <Pagination selectedScreenIndex={selectedScreenIndex} />
      <OnBordingScreen
        selectedScreenIndex={selectedScreenIndex}
        setSelectedScreenIndex={setSelectedScreenIndex}
      />
    </SafeAreaView>
  );
}
