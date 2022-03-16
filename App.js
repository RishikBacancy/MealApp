import React from "react";
import { enableScreens } from "react-native-screens";
import DrawerNavigation from "./src/navigation/DrawerNavigation";
import { createStore, combineReducers} from "redux";
import { Provider } from  "react-redux";
import mealsReducer from "./src/store/reducers/meals";

enableScreens();

const rootReducer = combineReducers({
  meals:mealsReducer
});

const store = createStore(rootReducer);

const App = () =>
{
  return(
    <Provider store={store}>
      <DrawerNavigation/>
    </Provider>
  );
};

export default App;