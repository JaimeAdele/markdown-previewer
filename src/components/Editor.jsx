import React from 'react';

const Editor = ({ markup, setMarkup }) => {
  return (
    <div id='editor'>
      <div className='header-bar drop-shadow'>
        <h1 className='text-display-title'>Editor</h1>
      </div>
      <textarea
        id='textarea'
        className='text-display monospace drop-shadow'
        value={markup}
        onChange={(e) => setMarkup(e.target.value)}
      />
    </div>
  );
};

export default Editor;
