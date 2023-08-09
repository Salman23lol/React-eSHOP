// import React, { useRef } from 'react';

function CopyInputToClipboard() {
    const inputRef = useRef(null);
  
    const handleCopyClick = () => {
      if (inputRef.current) {
        inputRef.current.select();
        document.execCommand('copy');
        alert('Text copied to clipboard!');
      }
    };
  
    return (
      <div>
        <input
          type="text"
          ref={inputRef}
          placeholder="Type something..."
        />
        <button onClick={handleCopyClick}>Copy to Clipboard</button>
      </div>
    );
  }
  
  export default CopyInputToClipboard;
  