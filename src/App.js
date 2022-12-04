import './App.css';

import { Panel } from './components/panel';
import { Desktop } from './components/desktop';
import { Dock } from './components/dock';
import { ControlPanel } from './components/controlPanel';
import { DesktopIcons } from './components/desktopIcons';

import { useState } from 'react';

function App() {
  const [controlPanelStatus, setControlPanelActive] = useState(false);

  return (
    <div className="App">
      <Panel setControlPanelActive={setControlPanelActive} controlPanelStatus={controlPanelStatus} />
      <DesktopIcons />
      <ControlPanel status={controlPanelStatus} />
      <Desktop />
      <Dock />
    </div>
  );
}

export default App;
