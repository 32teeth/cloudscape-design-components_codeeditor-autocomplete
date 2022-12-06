import ace, { Ace } from 'ace-builds';
import React, { useEffect, useState } from 'react';

import { Completions } from './Completions';
import CodeEditor from "@cloudscape-design/components/code-editor";
import "@cloudscape-design/global-styles/index.css"

const App = () => {
  const [preferences, setPreferences] = useState(
    undefined
  );
  const [loading, setLoading] = useState(true);

  const setAutocomplete = () => {
    setTimeout(() => {
      const editor = ace.edit(document.querySelector('.ace_editor'));
      editor.setOptions({
        theme: 'ace/theme/dawn',
        behavioursEnabled: false,
        wrapBehavioursEnabled: false,
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
      });

      const langTools = ace.require('ace/ext/language_tools');

      const completer = {
        getCompletions: (
          editor,
          session,
          pos,
          prefix,
          callback,
        ) => {
          callback(
            null,
            Completions.map((stub) => ({ ...stub, value: stub.value, score: stub.score, meta: stub.meta })),
          );
        },
      };

      langTools.setCompleters([]);
      langTools.addCompleter(completer);
    }, 1000);
  }

  useEffect(() => {
    import('ace-builds/src-noconflict/ace')
      .then((instance) => {
        import('ace-builds/webpack-resolver').then(() => {
          setLoading(false);
          setAutocomplete();
        });
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <CodeEditor
      controlId='code-editor'
      ace={ace}
      language="yaml"
      value=""
      preferences={preferences}
      onPreferencesChange={e => setPreferences(e.detail)}
      loading={loading}
      i18nStrings={{
        loadingState: "Loading code editor",
        errorState:
          "There was an error loading the code editor.",
        errorStateRecovery: "Retry",
        editorGroupAriaLabel: "Code editor",
        statusBarGroupAriaLabel: "Status bar",
        cursorPosition: (row, column) =>
          `Ln ${row}, Col ${column}`,
        errorsTab: "Errors",
        warningsTab: "Warnings",
        preferencesButtonAriaLabel: "Preferences",
        paneCloseButtonAriaLabel: "Close",
        preferencesModalHeader: "Preferences",
        preferencesModalCancel: "Cancel",
        preferencesModalConfirm: "Confirm",
        preferencesModalWrapLines: "Wrap lines",
        preferencesModalTheme: "Theme",
        preferencesModalLightThemes: "Light themes",
        preferencesModalDarkThemes: "Dark themes"
      }}

    />
  );
};

export default App;
