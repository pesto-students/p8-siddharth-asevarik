import React from 'react';

function DropdownMenu({Button=<button/> ,isOpen}) {
  

  return (
    <div>
        {Button}
      {isOpen && (
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      )}
    </div>
  );
}

export default DropdownMenu;




