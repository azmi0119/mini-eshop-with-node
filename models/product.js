const mongoose = require("mongoose")
const productSchema = mongoose.Schema({
	name : {
		type : String,
		required : true
	},
	description : {
		type : String, 
		required : true
	}, 
	richDescription : {
		type : String
	},
	image : {
		type : String, 
		required : true
	}, 
	images : [{
		type : String
	}],
	brand : {
		type : String, 
		required : true
	}, 
	price : {
		type : String, 
		required : true
	}, 
	category : {
		type : mongoose.Schema.Types.ObjectId,
		ref : 'Category',
		required : true
	},
	countInStock : {
		type : Number, 
		required : true,
		min : 0, 
		max : 500
	}, 
	rating : {
		type : Number, 
		default : 0
	}, 
	numReviews : {
		type : Number, 
		required : true,
		default : 0
	}, 
	isFeatured : {
		type : Boolean,
		default : false
	},
	dateCreated : {
		type : Date,
		default : Date.now()
	},
})

productSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

productSchema.set('toJSON', {
    virtuals: true,
});

exports.Product = mongoose.model('Product', productSchema);
 