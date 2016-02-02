function VueToPlugin(vueClass) {
  
  var piName = "dataTable";
  
  ;(function ( $, window, document, undefined ) {
    
    "use strict";
    
      var pluginName = piName,
          defaults = {
          	propertyName: "value"
      		};

      function Plugin ( element, options ) {
          this.element = element;
          this.settings = $.extend( {}, defaults, options );
          this._defaults = defaults;
          this._name = pluginName;
          this.init();
      };

      $.extend(Plugin.prototype, {
          init: function (data) {
          		var vueInstance = new vueClass({data: data});
              vueInstance.$mount(this.element);
              //var dataTable = new DataTable({data: data});
              //dataTable.$mount(this.element);
          },
      });

      $.fn[ piName ] = function ( options ) {
          return this.each(function() {
              if ( !$.data( this, "plugin_" + piName ) ) {
                  $.data( this, "plugin_" + piName, new Plugin( this, options ) );
              }
          });
      };

  })( jQuery, window, document );
  
}
