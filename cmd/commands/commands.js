function copyText(button) {
    var command = button.parentNode.querySelector('code').innerText;
    navigator.clipboard.writeText(command);
    button.innerText = 'Copied!';
    button.style.cursor = 'default';
    setTimeout(function() {
      button.innerText = 'Copy';
      button.style.cursor = 'pointer';
    }, 1000);
}
