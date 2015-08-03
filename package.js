Package.describe({
  name: 'mfq:account-modal',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('account-modal.js');
  api.use([
    'session@1.0.0',
		'stylus@1.0.0',
		'spacebars@1.0.0',
		'underscore@1.0.0',
		'templating@1.0.0',
		'anti:i18n@0.4.3'
  ], 'client');

  api.imply('accounts-base',['client', 'server']);
  api.use(['twbs:bootstrap@3.3.1', 'nemo64:bootstrap@3.3.1_1'], 'client', {weak: true});

  api.addFiles(
    [
      'client/template_modal.html',
      'client/login_in_modal.html',
      'client/login_buttons.html'
    ]
  )

});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mfq:account-modal');
  api.addFiles('account-modal-tests.js');
});
