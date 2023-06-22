import { useEffect, useState } from 'react';

import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { defaultText } from './constants';

const App = () => {
  const [markup, setMarkup] =
    useState(defaultText);

  useEffect(() => {
    console.log(markup);
  }, [setMarkup]);

  return (
    <div id='container'>
      <Editor markup={markup} setMarkup={setMarkup} />
      <Previewer markup={markup} />
    </div>
  );
};

export default App;
