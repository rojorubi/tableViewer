// Models are where actual data is kept. They can also be used
// for communicating between the server and the client through
// methods like save() and fetch().
//
// Models are the abstract data and do not know how they are
// supposed to be visualized. But they can perform validations
// to ensure the data is correct.
var models = {};

// Our base model is "tableitems"
models.TableItem = Backbone.Model.extend({

  // Example of how to do a validation in a model
  validate: function(attributes) {
      //TODO validation fields, etc... phase 2.
  }

});

// Table collection
models.Table = Backbone.Collection.extend({
  model: models.TableItem
});
