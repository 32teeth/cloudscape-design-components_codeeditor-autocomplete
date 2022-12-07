
import React from 'react';
import { Editor } from './Editor';

const App = () => {
  return (
    <>
      <nav>navigation</nav>
      <header>header</header>
      <div class='masthead'>masthead</div>
      <main>
        <section>
          <div class='workflow'>workflow</div>
          <Editor/>
          <div class='workflow'></div>
        </section>
      </main>
      <footer>footer</footer>
    </>
  );
};

export default App;
