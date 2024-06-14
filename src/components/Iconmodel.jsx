// import React, { useState } from 'react';
// import './IconModel.css';

// const icons = [
//   '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',  '😀', '😃', '😄', '😁', '😆', '😅', '🤣', '😂', '🙂', '🙃', '😉', '😊',
//   // Add more icons as needed
// ];

// function Iconmodel({
//   rowsInOnePage,
//   columnsInOnePage,
//   iconHeight,
//   iconWidth,
//   pickerHeight = '500px',
//   pickerWidth = '500px',
//   onIconSelect,import React, { useState } from 'react';
// import * as Icons from 'react-feather';
// import './IconModel.css';

// // Extracting the icon names from the react-feather library
// const iconNames = Object.keys(Icons);

// function Iconmodel({
//   rowsInOnePage,
//   columnsInOnePage,
//   iconHeight,
//   iconWidth,
//   pickerHeight = '500px',
//   pickerWidth = '500px',
//   onIconSelect,
//   onClose
// }) {
//   const iconsPerPage = rowsInOnePage * columnsInOnePage;
//   const totalPages = Math.ceil(iconNames.length / iconsPerPage);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   const startIndex = (currentPage - 1) * iconsPerPage;
//   const endIndex = startIndex + iconsPerPage;
//   const currentIcons = iconNames.slice(startIndex, endIndex);

//   return (
//     <div className="icon-picker-modal" style={{ height: pickerHeight, width: pickerWidth }}>
//       <div className="icon-picker-header">
//         <h3>Select App Icon</h3>
//         <button onClick={onClose}>X</button>
//       </div>
//       <div className="icon-picker-grid" style={{ gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`, gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)` }}>
//         {currentIcons.map((iconName, index) => {
//           const IconComponent = Icons[iconName];
//           return (
//             <div
//               key={index}
//               className="icon-picker-item"
//               style={{ height: iconHeight, width: iconWidth }}
//               onClick={() => onIconSelect(iconName)}
//             >
//               <IconComponent />
//             </div>
//           );
//         })}
//       </div>
//       <div className="icon-picker-footer">
//         <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Iconmodel;
//   onClose
// }) {
//   const iconsPerPage = rowsInOnePage * columnsInOnePage;
//   const totalPages = Math.ceil(icons.length / iconsPerPage);
//   const [currentPage, setCurrentPage] = useState(1);

//   const handlePageChange = (newPage) => {
//     if (newPage > 0 && newPage <= totalPages) {
//       setCurrentPage(newPage);
//     }
//   };

//   const startIndex = (currentPage - 1) * iconsPerPage;
//   const endIndex = startIndex + iconsPerPage;
//   const currentIcons = icons.slice(startIndex, endIndex);

//   return (
//     <div className="icon-picker-modal" style={{ height: pickerHeight, width: pickerWidth }}>
//       <div className="icon-picker-header">
//         <h3>Select App Icon</h3>
//         <button onClick={onClose}>X</button>
//       </div>
//       <div className="icon-picker-grid">
//         {currentIcons.map((icon, index) => (
//           <div
//             key={index}
//             className="icon-picker-item"
//             style={{ height: iconHeight, width: iconWidth }}
//             onClick={() => onIconSelect(icon)}
//           >
//             {icon}
//           </div>
//         ))}
//       </div>
//       <div className="icon-picker-footer">
//         <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
//         <span>Page {currentPage} of {totalPages}</span>
//         <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
//       </div>
//     </div>
//   );
// }

// export default Iconmodel;
import React, { useState } from 'react';
import * as Icons from 'react-feather';
import './IconModel.css';

// Extracting the icon names from the react-feather library
const iconNames = Object.keys(Icons);

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
  const totalPages = Math.ceil(iconNames.length / iconsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (newPage) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const startIndex = (currentPage - 1) * iconsPerPage;
  const endIndex = startIndex + iconsPerPage;
  const currentIcons = iconNames.slice(startIndex, endIndex);

  return (
    <div className="icon-picker-modal" style={{ height: pickerHeight, width: pickerWidth }}>
      <div className="icon-picker-header">
        <h3>Select App Icon</h3>
        <button onClick={onClose}>X</button>
      </div>
      <div className="icon-picker-grid" style={{ gridTemplateColumns: `repeat(${columnsInOnePage}, ${iconWidth}px)`, gridTemplateRows: `repeat(${rowsInOnePage}, ${iconHeight}px)` }}>
        {currentIcons.map((iconName, index) => {
          const IconComponent = Icons[iconName];
          return (
            <div
              key={index}
              className="icon-picker-item"
              style={{ height: iconHeight, width: iconWidth }}
              onClick={() => onIconSelect(iconName)}
            >
              <IconComponent />
            </div>
          );
        })}
      </div>
      <div className="icon-picker-footer">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
}

export default Iconmodel;