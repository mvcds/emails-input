'use strict';

function Logic () {
  //  necessary because text can be repeated
  let id = 0;
  const logic = {
    addEmail (raw) {
      const email = raw && raw.trim();

      if (!email) {
        return
      }

      const data = {
        email,
        id: id++
      };

      logic.emails.push(data);

      const event = {
        email,
        isValid: isEmailValid(email),
        onRemoveEmail: () => {
          const index = logic.emails.findIndex(x => x.id === data.id);

          logic.emails.splice(index, 1);
        }
      };

      logic.onAddEmail(event);
    },
    emails: []
  };

  return logic
}

// https://stackoverflow.com/a/46181/3178998
function isEmailValid (email) {
  //  eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase())
}

function addBlock ({ editor, input }, event) {
  const block = document.createElement('span');

  block.className = 'emails-input__block';

  if (!event.isValid) {
    block.className = block.className + ' emails-input__block--invalid';
  }

  addLabel(block, event);
  addRemoveButton(block, editor, event);

  editor.insertBefore(block, input);
}

function addLabel (block, event) {
  const label = document.createElement('span');
  label.innerHTML = event.email;
  label.className = 'emails-input__block-email';

  block.appendChild(label);
}

function addRemoveButton (block, editor, event) {
  const button = document.createElement('span');

  button.innerHTML = 'X';
  button.className = 'emails-input__block-remove';

  button.addEventListener('click', function onRemoveBlock () {
    editor.removeChild(block);
    event.onRemoveEmail();
  });

  block.appendChild(button);
}

function addInput (editor, logic) {
  const input = document.createElement('input');

  input.className = 'emails-input__email';
  input.type = 'email';
  input.tabIndex = 0;
  input.autofocus = true;
  input.placeholder = 'add more people…';

  input.addEventListener('keydown', function onKeyDown (event) {
    if (event.key === ',' || event.key === 'Enter') {
      logic.addEmail(input.value);
      input.value = '';
    }
  });

  input.addEventListener('input', function onInput (event) {
    if (event.data === ',' || event.data === 'Enter') {
      input.value = '';
    }
  });

  input.addEventListener('blur', function onBlur (event) {
    logic.addEmail(input.value);
    input.value = '';
  });

  input.addEventListener('paste', function onPaste (event) {
    //  uses the timeout to be sure that the value has changed
    setTimeout(() => {
      input.value.split(',').forEach(logic.addEmail);
      input.value = '';
    }, 0);
  });

  logic.onAddEmail = addBlock.bind(null, { editor, input });

  editor.appendChild(input);
}

function addContent (node, logic) {
  const content = document.createElement('div');

  content.className = 'emails-input__content';

  node.appendChild(content);

  addTitle(content);
  addEditor(content, logic);
}

function addTitle (content) {
  const title = document.createElement('header');

  title.className = 'emails-input__title';
  title.innerHTML = 'Share Board Name with others';

  content.appendChild(title);
}

function addEditor (content, logic) {
  const editor = document.createElement('div');

  editor.className = 'emails-input__editor';

  content.appendChild(editor);

  addInput(editor, logic);
}

function addFooter (node) {
  const footer = document.createElement('footer');

  footer.className = 'emails-input__footer';

  node.appendChild(footer);

  addAddEmail(footer);
  addGetEmailsCount(footer);
}

function addAddEmail (footer) {
  const button = document.createElement('button');

  button.innerHTML = 'Add email';
  button.type = 'button';
  button.className = 'emails-input__footer-button';

  footer.appendChild(button);
}

function addGetEmailsCount (footer) {
  const button = document.createElement('button');

  button.innerHTML = 'Get emails count';
  button.type = 'button';
  button.className = 'emails-input__footer-button';

  footer.appendChild(button);
}

function Ui (node, logic) {
  node.className = 'emails-input';

  addContent(node, logic);
  addFooter(node);
}

const CONFIG = {
  emails: []
};

function EmailsInput (inputContainerNode, config) {
  const options = { ...CONFIG, ...config };

  const logic = new Logic();

  Ui(inputContainerNode, logic);

  options.emails.forEach(logic.addEmail);

  return {}
}

module.exports = EmailsInput;
