var mongoose = require('mongoose')
	, models = require('microcommunity/models/index')
	, hasWall = require('microcommunity/models/plugins/haswall')
	, hasStream = require('microcommunity/models/plugins/has-stream')	

var wikipageSchema = new mongoose.Schema({
	title: String,
	content : String,
	wiki : { type : mongoose.Schema.Types.ObjectId, ref : 'Wiki' },
})

wikipageSchema.pre('init', function(next, doc){
	this.model('Wiki').populate(doc, 'wiki', next)	
})

wikipageSchema.plugin(hasWall, { displayNameAttribute : 'title' })
wikipageSchema.plugin(hasStream)

models.define('Wikipage', 'wikipage', 'wikipages', wikipageSchema)
