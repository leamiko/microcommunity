define [
	'jquery'
	'backbone'
	'cs!views/comments_thread'
	'jquery.gravatar'
	'general'
	'moment'
], ($, Backbone, CommentsThreadView) ->
	class PostView extends Backbone.View
		className: "post"
		template: _.template($('#post-template').html())

		initialize: ->
			@commentsThread = new CommentsThreadView 
				collection: @model.comments
				postId: @model.id			
			_.bindAll @

		render: ->	
			$(@el).html @template(@model.attributes)
			$(@el).find('.comments-thread').html @commentsThread.render().el
			unless window.current_user?
				$(@el).find('.comments-text').hide()

			@
