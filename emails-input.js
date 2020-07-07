const CONFIG = {
  emails: []
}

function EmailsInput(inputContainerNode, config) {
  const options = {...CONFIG, ...config}

  inputContainerNode.className = 'emails-input';

  const content = createContent(options);
  const footer = createFooter();

  inputContainerNode.appendChild(content);
  inputContainerNode.appendChild(footer);

  return {}
}

function createContent({ emails }) {
  const content = document.createElement('div');
  const title = document.createElement('header');
  const editor = document.createElement('div');
  const input = document.createElement('input');

  content.appendChild(title);
  content.appendChild(editor);
  editor.appendChild(input);

  content.className = 'emails-input__content';

  title.className = 'emails-input__title';
  title.innerHTML = 'Share Board Name with others';

  editor.className = 'emails-input__editor';

  input.className = 'emails-input__email';
  input.type = 'email';
  input.tabIndex = 0;
  input.autofocus = true;
  input.placeholder = 'add more people…';

  emails.forEach((email) => createBlock(email, editor, input))

  return content;
}

function createBlock(email, editor, reference) {
  const block = document.createElement('span');
  const text = document.createElement('span');
  const remove = document.createElement('span');

  block.appendChild(text)
  block.appendChild(remove)
  editor.insertBefore(block, reference);

  block.className = 'emails-input__block';

  if (!isEmailValid(email)) {
    block.className = block.className + ' emails-input__block--invalid';
  }

  text.innerHTML = email;
  text.className = 'emails-input__block-email';

  remove.innerHTML = 'X';
  remove.className = 'emails-input__block-remove';
}

// https://stackoverflow.com/a/46181/3178998
function isEmailValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function createFooter() {
  const footer = document.createElement('footer');
  const addEmail = document.createElement('button');
  const getEmailsCount = document.createElement('button');

  footer.appendChild(addEmail);
  footer.appendChild(getEmailsCount);

  footer.className = 'emails-input__footer';

  addEmail.innerHTML = 'Add email';
  addEmail.type = 'button';
  addEmail.className = 'emails-input__footer-button';

  getEmailsCount.innerHTML = 'Get emails count';
  getEmailsCount.type = 'button';
  getEmailsCount.className = 'emails-input__footer-button';

  return footer;
}
