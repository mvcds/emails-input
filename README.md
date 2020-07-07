# emails-input

An easy way to input emails on your app!

[Click here](https://miro.com/app/board/o9J_kp_qvfY=/) to check the progress of this project

## Basic Example

You need a few ingredients to use this lib

1. A target node e.g. `<div id="emails-input"></div>`
1. Import the relevant CSS file e.g. `<link rel="stylesheet" href="./emails-input.css">`
1. The script itself, calling the lhis lib e.g. `<script src="./emails-input.js"></script>`.
1. "Bind" the script to the target node with JS e.g.

```js
  var targetNode = document.querySelector('#emails-input');
  var emailsInput = EmailsInput(targetNode);
```

`EmailsInput` is a function that takes as first argument a node where a `EmailEditor` will be rendered, the second and optional argument is an object containing some members which change how the instance behaves/looks.
