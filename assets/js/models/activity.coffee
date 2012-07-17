class window.Activity extends Backbone.Model
	defaults:
		actor: "Actor"
		verb: "verbed"
		object: "Object"
		target: "Target"

	idAttribute: "_id"

	url: ->
		"/api/activity/"

	initialize: (options)->
		@comments = new Comments
		if options?
			@comments.add options.comments


class window.Activities extends Backbone.Collection
	model: window.Activity
	url: '/api/activities/'

