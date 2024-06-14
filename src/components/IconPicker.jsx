import React from 'react'
import Iconmodel from './Iconmodel';
import { useState}  from 'react';
import './Iconpicker.css'

const IconPicker = () => {
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [isPickerOpen, setIsPickerOpen] = useState(false);
  
    const openPicker = () => {
      setIsPickerOpen(true);
    };
  
    const closePicker = () => {
      setIsPickerOpen(false);
    };
    
    const handleIconSelect = (icon) => {
      setSelectedIcon(icon);
      closePicker();
    };
  
    const handleCancel = () => {
      setSelectedIcon(null); // Reset selected icon
      closePicker();
    };


    
  
    return (
      <div className="App">
        <div className="icon-container" onClick={openPicker}>
          {selectedIcon ? <span className="icon">{selectedIcon}</span> : 'Select Icon'}
        </div>
        {isPickerOpen && (
          <Iconmodel
            rowsInOnePage={5}
            columnsInOnePage={5}
            iconHeight={50}
            iconWidth={50}
            pickerHeight="500px"
            pickerWidth="500px"
            onIconSelect={handleIconSelect}
            onClose={handleCancel}
          />
        )}
      </div>
    );
  
}


export default IconPicker
