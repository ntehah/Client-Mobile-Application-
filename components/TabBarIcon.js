import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <FontAwesome
      name={props.name}
      size={25}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
