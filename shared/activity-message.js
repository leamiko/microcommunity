// https://github.com/jrburke/amdefine
if (typeof define !== 'function') { var define = require('amdefine')(module); }

/* require additional modules if needed
define(['./other-module.js'], function (other-module) {*/
define([], function () {
  return {
  
  	message : function(model, singleMode){
  		console.log(model)
  	
			//var name = "<a href='/profile/" + model.actor.id + '>'+ model.actor.profile.displayName + "</a>";
			var name = model.actor.profile.displayName;	
			
			var phrases = {}
			
			if ( model.object_type ==  'Revision')	{
				phrases = {
					edit: name + " edited a wikipage titled " + model.object.page.title,
					aggr_edit : name + " made several edits on the wikipage titled " + model.object.page.title,
					create: name + " created a wikipage titled " + model.object.page.title,
					upvote: name + " upvoted a revision",
					downvote: name + " downvoted a revision"
				};			
			
			}	else if ( model.object_type ==  'Post' ) {
				phrases = {
					comment: name + " commented a post",
					create: name + " created a new post"				
				}									
			}			
	
			if (singleMode)
				return phrases[model.verb]
			else
				return phrases.aggr_edit  	
  	}
  	
  };
});