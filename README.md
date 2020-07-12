# emails-input

An easy way to input emails on your app!

[Click here](https://miro.com/app/board/o9J_kp_qvfY=/) to check the progress of this project.

## Basic Example

You need a few ingredients to use this lib

1. A target node e.g. `<div id="emails-input"></div>`
1. Refer to the relevant CSS files e.g. `<link rel="stylesheet" href="./emails-input.css">` and `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open Sans">`
1. The script itself, calling the lhis lib e.g. `<script src="./emails-input.js"></script>`.
1. "Bind" the script to the target node with JS e.g.

```js
  var targetNode = document.querySelector('#emails-input');
  var emailsInput = EmailsInput(targetNode);
```

`EmailsInput` is a function that takes as first argument a node where an `EmailEditor` will be rendered, the second and optional argument is an object containing some members which change how the instance behaves/looks.

For a complete example, check the HTML file under the `docs` folder, as that file serves the same content available at the [example page](https://mvcds.github.io/emails-input/). You can also copy or reference the files from `docs` to use in your own projects.

## API

### EmailsInput

The main function of this lib, it is responsible to convert the node into the editor, so to speak.

`var instance = EmailsInput(node [, config])`

Where `config` is an object containing the following properties:

```js
{
  emails: [], //initial list of emails e.g ['marcos.silva@miro.com']
  createTitleNodes: () => [], //a function which returns a list of nodes to customize the title
  classes: '', //extra class names for customize the input
}
```

### Instances

#### setEmails

Accepts a list of strings (the emails) to redefine what is available on the instance.

```js
instance.setEmails(['marcos.silva@miro.com'])
```
#### getEmails

Gets a list of strings (the emails) owned by the instance.

```js
instance.getEmails() // => ['jhon@miro.com']
```

## Want to help?

Check our [contribution guide](./CONTRIBUTING.md) for instructions about how to develop and test after cloning this project.
