import './App.css';

import { Panel } from './components/panel';
import { Desktop } from './components/desktop';
import { Dock } from './components/dock';
import { ControlPanel } from './components/controlPanel';
import { DesktopIcons } from './components/desktopIcons';

import { useState } from 'react';
import { ActionBar } from './components/actionBar';

function App() {
  const [controlPanelStatus, setControlPanelActive] = useState(false);
  const [actionBarStatus, setActionBarActive] = useState(false);

  return (
    <div className="App">
      <Panel setControlPanelActive={setControlPanelActive} controlPanelStatus={controlPanelStatus} setActionBarActive={setActionBarActive} actionBarStatus={actionBarStatus} />
      <ActionBar status={actionBarStatus} />
      <ControlPanel status={controlPanelStatus} />
      <Desktop />
      <DesktopIcons />
      <Dock />
    </div>
  );
}

export default App;
