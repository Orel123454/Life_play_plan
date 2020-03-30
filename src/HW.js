import React from 'react';
//import ReactDOM from 'react-dom';
import { Root, View, Panel, PanelHeader, Header, Group, Cell, CellButton } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from "@vkontakte/vk-bridge";

var st = bridge.send("VKWebAppGetUserInfo", {});

class HW extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        activeView: 'view1'
      }
    }
    
    render() {
      return (
        <Root activeView={this.state.activeView}>
          <View activePanel="panel1.1" id="view1">
            <Panel id="panel1.1">
              <PanelHeader>View 1</PanelHeader>
              <Group>
                <CellButton onClick={ () => this.setState({ activeView: 'view2' }) }>
                  {st.data.id}
                </CellButton>
              </Group>
            </Panel>
          </View>
          <View header activePanel="panel2.1" id="view2">
            <Panel id="panel2.1">
              <PanelHeader>View 2</PanelHeader>
              <Group>
                <CellButton onClick={ () => this.setState({ activeView: 'view1' }) }>
                  Back to View 1
                </CellButton>
              </Group>
            </Panel>
          </View>
        </Root>
      )
    }
}
  

//ReactDOM.render(<HW />, document.getElementById('root'));
export default HW;