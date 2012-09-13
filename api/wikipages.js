var provider = require('./../providers/wikipages-provider')
	, database = require('./../providers/db');	
	
exports.create = function(req, res){

	console.log(req.body)

	var attr = {
		title: req.body.title, 
    body: req.body.body,
    created_at : Date(),
    user : req.body.user,
    parent : database.normalizeID(req.body.parent._id),
    parent_type : req.body.parent_type    
	};
	
	provider.createWikiPage(attr, function(err, new_wikipage){
		return res.send(new_wikipage);     
	});	  	
};


exports.show = function(req, res){
	provider.fetch(req.params.wikipage, function(err, wikipage){
		return res.send(wikipage); 	
	});  
}

exports.update = function(req, res){	
	var updated_wikipage = {
    body: req.body.body,
    created_at : new Date(),
    summary : req.body.summary,
    diff : req.body.diff,
    user : req.body.user
	};  	
	
	provider.updateWikiPage(req.params.wikipage, updated_wikipage, function(err, wikipage){
		return res.send(wikipage); 	
	}); 
	
}



