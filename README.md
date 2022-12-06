# CodeEditorAutocomplete

> author: Eugene Yevhen Andruszczenko
> github: @32teeth
> email: eugene.andruszczenko@gmail.com

### Overview
In it’s current state as of writing *([Cloudscape Design System](https://refresh.polaris.a2z.com/) / Polaris)* has a `<CodeEditor>` component which extends the [Cloud9 Ace Editor](https://ace.c9.io/) with additional features and component rich presentation for toolbar panel, language line and annotation along with an encapsulated theme selector. The rich text editor additionally feature extensive API, but leaves any context and support directly related to Ace up to the consumer of the `<CodeEditor>`

One drawback of using the offered `<CodeEditor>` is it’s direct capability to extend with completions (triggers, snippets and typeahead) features almost expected from today’s web based editors.

### Goal
![](https://document-versions-production.s3.us-west-2.amazonaws.com/6c0cea03-293c-40df-b35e-499bac1c28c3?response-content-disposition=inline%3B%20filename%3D%22basic_autocomplete.gif%22&response-content-type=image%2Fgif&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA2DQ7HDUAXS7ZT374%2F20221206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221206T194554Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDQiYxYI8OwjdSo0os0lBU8DVmW1FOnk7WTVTP6NcUu2AiAcKZCZ0e0jdPUh7LVOPcSGFhnMSRtqHIt27Isrm8F30SrIAwgdEAMaDDY5NDc3NjQzODAxNyIMw%2BS7vpHvKH5%2FCDnvKqUDhqfuDfpI5STjqnVk6pR4Xywx6MNFEwRp8c9nM%2Bh9xkcrtQmXD8AuPhI6XagFGhXHlx9TaGSjpF5rfG9TSRy%2BRCGjrUWEeu4JkMPwETWFFcowKzwIdFCfbuNM4FjybxTscZfk%2Fk1FxfEHQ5Tmcv02xsvnPv3HTGKQ%2F5eydD3S%2BeMych%2BPa8Omxw7J3emYf9pcaaF2jS1zW8B0EcQTlPuL0FhG0ebcQTkyHUGTbsSt6TI%2BSQTJ2CM1EudARjes7zPN9xWnBwWLmyMeJGntomtTAQMkT9TxZUxJXWUp%2Fd8fjGciA1EooAxKuIfe2ccd6%2FN%2Bm0TtZgD5B0mGSIgjiJdqUvf5qaG3Vy%2BiEJQyBuxDgNIytj2Dd3YHN5hF7NfI6D8yjyxbXnapR6SocmKRRvnGAqeSmjJ2rcLgN8qGfqQoPw37AOME16oY4i8SxHLpXW%2BNWFwQ8qi9jDyhyNmPjK7kbzfRr%2BnxQYKC2N07dDJXRgQwwgLOlKwRv4IUj778U50Bs7TterAl%2BWyqEIUL5sjLiM55jBYgnVIRi5nLMOOVCTVWrxuLbjCUsb6cBjqiAeGci8Adt74jiVn1UIt7e1hZoUM7qCtj%2BViDlmtLiKjg4thKP9nxKX%2FvkwNXm%2BXVDH1FNw31CDLUslWj6epaDMFeLuCJKCaIDvR%2BbaRlrEN8hrQeCCzm31n%2BjFHMKDRl3SKf%2B3gHVQQWsT04KIiL53J86nnHiwWD7qI2sahvNFvlmj7SvgjI1v467daGM4rEKSKGVGlz17mn%2F%2B13D5a%2BEgT%2FJQ%3D%3D&X-Amz-SignedHeaders=host&X-Amz-Signature=7c81b397f17194e7a0276d2bd8b4d03adc4422b94c93ed108c055b0c31e44993)

### Running
```
npm i
npm start
```
### Viewing
[Open you local browser to :5001](http://localhost:5001/)