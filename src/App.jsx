import { useEffect, useState } from 'react';

import Editor from './components/Editor';
import Previewer from './components/Previewer';

const App = () => {
  const [markup, setMarkup] = useState('');

  useEffect(() => {
    console.log(markup);
  }, [setMarkup]);

  return (
    <div id='container'>
      <Editor setMarkup={setMarkup} />
      <Previewer markup={markup} />
    </div>
  );
};

export default App;
