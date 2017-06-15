Package.describe({
  name:          'meteortoys:notifications',
  summary:       'A simple way to jot notifications',
  version:       '4.0.0',
  git:           'https://github.com/MeteorToys/Glue.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  var clientFiles = [
    "client/main.js"
  ];

  api.add_files(clientFiles, "client");
  api.versionsFrom("1.0");
  
  api.export('Note', ['client']);

});
