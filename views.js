// Views are responsible for rendering stuff on the screen (well,
// into the DOM).
//
// Typically views are instantiated for a model or a collection,
// and they watch for change events in those in order to automatically
// update the data shown on the screen.
var views = {};

views.TableItem = Backbone.View.extend({
  // Each person will be shown as a table row
  tagName: 'tr', 
  events: {
     "change" : "change",
  },

  isFloat: function(n){
    return n % 1 != 0;
  },
 
  initialize: function(options) {
    // Ensure our methods keep the `this` reference to the view itself
    _.bindAll(this, 'render');

    // If the model changes we need to re-render
    this.model.bind('change', this.render);
  },

  render: function() {
    // Clear existing row data if needed
    jQuery(this.el).empty();
    console.log(this.model);

    for(var attr in this.model['attributes']) {
        //console.log(attr);
        //console.log(this.model['attributes'][attr]);
        if (attr.indexOf("the_geom")!=-1) {
          jQuery(this.el).append(jQuery('<td>' + S_TEXT_TYPE_GEOJSON + '</td>'));
        }else if(Number.isInteger(this.model['attributes'][attr])){
          jQuery(this.el).append(jQuery('<td><font color="#82AC59">'+ this.model['attributes'][attr] + '</font></td>'));
        }else{
           jQuery(this.el).append(jQuery('<td>'+ this.model['attributes'][attr] + '</td>'));
        }      
    }

    return this;
  },
});

views.Table = Backbone.View.extend({
  // The collection will be kept here
  collection: null,

  // The table list view is attached to the table body
  el: 'tbody',

  initialize: function(options) {
    this.collection = options.collection;

    // Ensure our methods keep the `this` reference to the view itself
    _.bindAll(this, 'render');

    // Bind collection changes to re-rendering
    this.collection.bind('reset', this.render);
    this.collection.bind('add', this.render);
    this.collection.bind('remove', this.render);
  },

  render: function() {
    var element = jQuery(this.el);
    // Clear potential old entries first
    element.empty();

    // Go through the collection items
    this.collection.forEach(function(item) {

    // Instantiate a TableItem view for each
    var itemView = new views.TableItem({
      model: item
    });

    // Render the TableView, and append its element
    // to the table
    element.append(itemView.render().el);

  });

    return this;
  }
});
