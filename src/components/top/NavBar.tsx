import React, { useContext, useState } from 'react';
import AppContext from '../../context/AppContext';
import { AppInterface, Originals, OrigNativeEl } from '../../parser/interfaces';
import Modal from '../left/Modal';

const NavBar = (): JSX.Element => {
  const { setCopies, setOriginals, setCurrentComponent } = useContext(AppContext);
  const [currentModal, setCurrentModal] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

  const clearAll = () => {
    setCurrentComponent('App');
    setOriginals({
        App: { type: 'App', children: [], state: [] } as AppInterface,
        View: { type: 'View', index: 0 } as OrigNativeEl,
        Button: { type: 'Button', index: 0 } as OrigNativeEl,
        Text: { type: 'Text', index: 0 } as OrigNativeEl,
        Image: { type: 'Image', index: 0 } as OrigNativeEl,
        TextInput: { type: 'TextInput', index: 0 } as OrigNativeEl,
        ScrollView: { type: 'ScrollView', index: 0 } as OrigNativeEl,
        FlatList: { type: 'FlatList', index: 0 } as OrigNativeEl,
        SectionList: { type: 'SectionList', index: 0 } as OrigNativeEl,
        Switch: { type: 'Switch', index: 0 } as OrigNativeEl,
        TouchableHighlight: { type: 'TouchableHighlight', index: 0 } as OrigNativeEl,
        TouchableOpacity: { type: 'TouchableOpacity', index: 0 } as OrigNativeEl,
        StatusBar: { type: 'StatusBar', index: 0 } as OrigNativeEl,
        ActivityIndicator: { type: 'ActivityIndicator', index: 0 } as OrigNativeEl,
    });
    setCopies({});
    setIsOpen(false);
  };

  const handleClearAllClick = () => {
    setCurrentModal('clearAll');
    setIsOpen(true);
  };

  const handleExportClick = () => {
    setCurrentModal('export');
    setIsOpen(true);
  };

  const exportApp = () => {
    // loop through all custom components in Originals context and create a new file for each one
    // fill each file with the appropriate code using the parser.ts file
    // ask users where they want to save the files
    // save the files
    // close the modal
    
  };

  const handleClick = () => {
		setIsOpen(false);
		console.log('close button clicked');
	}


  return (
    <>
      <div id='navbar-container'>
        <div id='logo-container'>
          <img id='actual-logo'src='/icons/logo-no-background.png'></img>
        </div>

        <div id='master-button-container'>
          <button className='master-button' onClick={() => handleClearAllClick()}>Clear All</button>
          <button className='master-button' onClick={() => handleExportClick()}>Export</button>
        </div>
      </div>

      {isOpen ? (
        <Modal handleClick={handleClick}>
        {currentModal === 'clearAll' ? (
          <div id='clearAll'>
            <h1>Are you sure you want to clear all?</h1>
            <button onClick={() => clearAll()}>Yes</button>
            <button onClick={() => handleClick()}>No</button>
          </div>
        ) : currentModal === 'export' ? (
          <div id='export'>
            <h1>Are you sure you want to export?</h1>
            <button onClick={() => exportApp()}>Yes</button>
            <button onClick={() => handleClick()}>No</button>
          </div>
        ) : null}
        </Modal>
      ) : null}
    </>
  )
}

export default NavBar;