schema.kitty = new mongoose.Schema(
	{name: 'String'
	}
)

models.Kitten = db.model('Kitten', schema.kitty)