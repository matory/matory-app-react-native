import React from 'react'
import { View, Text } from 'react-native'
import { Container, Content, Tab, Tabs, TabHeading, Icon } from 'native-base';

import Mall from './Mall';
import Itenerary from './Itenerary';

const Header = () => {
  return (
    <Container>
      <Tabs>
        <Tab Tab heading={ <TabHeading><Icon name="md-outlet"/><Text style={styles.textMenu}>Mall</Text></TabHeading> }>
          <Mall/>
        </Tab>
        <Tab heading={ <TabHeading><Icon name="md-navigate"/><Text style={styles.textMenu}>Itenerary</Text></TabHeading> }>
          <Itenerary/>
        </Tab>
      </Tabs>
    </Container>
  );
}

const styles = {
  textMenu : {
    fontWeight: 'bold',
    color: '#ffffff',
    marginLeft: 15
  },
}

export default Header
