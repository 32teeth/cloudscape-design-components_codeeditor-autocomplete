export const Completions = [
  /**
   * single word completions
   * {value: 'value', score: 0, meta: 'meta'}
   */
  { value: 'Identifier:', score: 1, meta: 'Identifier' },
  { value: 'OutputArtifacts:', score: 1, meta: 'OutputArtifacts' },
  { value: 'Configuration:', score: 1, meta: 'Configuration' },
  { value: 'Environment:', score: 1, meta: 'Environment' },
  { value: 'Branch:', score: 1, meta: 'Branch' },
  { value: 'Events:', score: 1, meta: 'Events' },
  { value: 'Name:', score: 1, meta: 'Name' },
  { value: 'RunMode:', score: 1, meta: 'RunMode' },
  { value: 'SchemaVersion', score: 1, meta: 'SchemaVersion' },
  { value: 'Push', score: 1, meta: 'Push' },
  { value: 'PullRequest', score: 1, meta: 'PullRequest' },

  /**
   * snippet completions
    {
    caption: 'Identifier',
    type: 'snippet',
    meta: 'Metadata for the completion',
    snippet: `Copmletion snippet`,
    },
   */
  {
    caption: 'Action',
    type: 'snippet',
    meta: 'Add a single action',
    snippet: `\${1:name}:
	Identifier: \${2:identifier}
	Inputs:
		Sources:
			- \${3:source}`,
  },
  {
    caption: 'Actions',
    type: 'snippet',
    meta: 'Add actions section to workflow',
    snippet: `Actions:
	\${1:name}:
		Identifier: \${2:identifier}
		Inputs:
			Sources:
				- \${3:source}`,
  },
  {
    caption: 'Report',
    type: 'snippet',
    meta: 'Allows users to configure a test report',
    snippet: `\${1:name}:
	Format: \${2: format}
	IncludePaths:
			- "**/*"`,
  },
  {
    caption: 'Triggers:',
    type: 'snippet',
    meta: 'Add Triggers Snippet',
    snippet: `Triggers:
	- Type: \${1:type}
	  Branches:
		- \${2:branch}`,
  },
  ];