import React, { Component } from 'react';
import Drawer from 'react-native-drawer';
import Menu from './Menu';
import Shop from './Shop';

class Main extends Component {
    closeControlPanel = () => {
        this.drawer.close();
    }

    openControlPanel = () => {
        this.drawer.open();
    }
    render() {
        return (
            <Drawer
                    ref={ref => { this.drawer = ref; }}
                    content={<Menu close={this.closeControlPanel.bind(this)} />}
                    openDrawerOffset={0.4}
                    panCloseMask={0.2}
            >
                <Shop open={this.openControlPanel.bind(this)} />
            </Drawer>
        );
    }
}

export default Main;
