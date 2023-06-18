import { marked } from 'marked';
import parse from 'html-react-parser';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';
import { useEffect } from 'react';

const Previewer = ({ markup }) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [markup]);

  return (
    <div id='preview'>
      <div className='header-bar drop-shadow'>
        <h1 className='text-display-title'>Previewer</h1>
      </div>
      <div className='text-display preview-display drop-shadow'>
        {parse(marked.parse(markup))}
      </div>
    </div>
  );
};

export default Previewer;
