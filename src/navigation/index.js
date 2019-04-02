import {createStackNavigator, createAppContainer} from "react-navigation";
import HomeScreen from "./../views/home";
import AboutScreen from "./../views/about";

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    About: AboutScreen,
  },
  {
    initialRouteName: "Home",
  }
);

export default createAppContainer(AppNavigator);
