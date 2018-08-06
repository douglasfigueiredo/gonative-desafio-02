import { StackNavigator } from 'react-navigation';

// Pages
import List from 'pages/list';
import Issues from 'pages/issues';

const Routes = StackNavigator(
  {
    List: { screen: List },
    Issues: { screen: Issues },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FFF',
      },
    },
  },
);

export default Routes;
