function EmailsInput(inputContainerNode) {
  inputContainerNode.className = 'emails-input';

  const content = createContent();
  const footer = createFooter();

  inputContainerNode.appendChild(content);
  inputContainerNode.appendChild(footer);
}

function createContent() {
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

  return content;
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

  getEmailsCount.innerHTML = 'Get emails count';
  getEmailsCount.type = 'button';

  return footer;
}
