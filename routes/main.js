app.get('/', function(req, res){
	res.render('home.jade',
		{ DEBUG : DEBUG
		, config : config
		}
	)
})

app.get('/testdb', function(req, res){
	var silence = new models.Kitten({ name: 'Silence' })
	console.log(silence.name)
	silence.save(function (err) {
		if (err) console.log(err)
		models.Kitten.find({name:'Silence'},function (err, kittens) {
			if (err) console.log(err)
			res.write(JSON.stringify(kittens))
			res.end();
		})
	})
})