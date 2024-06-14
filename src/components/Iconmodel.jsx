import React, { useState } from 'react';
import './IconModel.css';

const icons = [
  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',
  // Add more icons as needed
];

function Iconmodel({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = '500px',
  pickerWidth = '500px',
  onIconSelect,
  onClose
}) {
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const totalPages = Math.ceil(icons.length / iconsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * iconsPerPage;
  const endIndex = startIndex + iconsPerPage;
  const currentIcons = icons.slice(startIndex, endIndex);

  return (
    <div className="icon-picker-modal" style={{ height: pickerHeight, width: pickerWidth }}>
      <div className="icon-picker-header">
        <h3>Select App Icon</h3>
        <button onClick={onClose}>X</button>
      </div>
      <div className="icon-picker-grid">
        {currentIcons.map((icon, index) => (
          <div
            key={index}
            className="icon-picker-item"
            style={{ height: iconHeight, width: iconWidth }}
            onClick={() => onIconSelect(icon)}
          >
            {icon}
          </div>
        ))}
      </div>
      <div className="icon-picker-footer">
        <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
      </div>
    </div>
  );
}

export default Iconmodel;
