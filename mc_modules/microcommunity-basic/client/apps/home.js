define([
	'models/index',
	'modules/publisher',
	'modules/stream',
	'views/sidebars/basic',
	'views/sidebars/new-wikipage',	
], function(Models, publiserhModule, streamModule, basicSidebar, newWikipageSidebar){

	var App = new Backbone.Marionette.Application()	
	
	App.currentUser = new Models.User(server.currentUser)

	App.addRegions({
		mainSidebar : '#main-sidebar-region',
		publisher : '#publisher-region',
		stream : '#stream-region'
	})
	
	App.mainSidebar.show(new basicSidebar())
	
	if (App.currentUser.id){
	
		var options = {
			wall : App.currentUser.get('wall'),
			identifier : 'user-wall'
		}
		var Publisher = publiserhModule(App, options, function(view){
			App.publisher.show(view)
		})
		
		App.vent.on('publisher:newitem', function(item){				
			Stream.add(item) 
		})		
	}
		
	var Stream = streamModule(App, { items : server.data.items, type : 'stream' }, function(view){
		App.stream.show(view)
	})
		
	return App
	
});

