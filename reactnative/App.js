import * as React from 'react';
import StackScreen from './component/Stack/StackScreen';
import { useFonts} from "expo-font"
const App = () => {
  const [fontsLoaded] = useFonts({
    "thin":require("./assets/fonts/BeVietnamPro-Light.ttf"),
    "regular":require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    "medium":require("./assets/fonts/BeVietnamPro-Medium.ttf"),
    "semiBold":require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    "bold":require("./assets/fonts/BeVietnamPro-Black.ttf"),
  })
  return (
     <StackScreen />
  );
};

export default App;
