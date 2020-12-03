/*
const fs = require('fs');
const express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
	fs.readFile('view/index.html', function(err, data) {
		if (err) throw err;
		else {
			res.writeHead(200, {'Content-Type':'text/html'});
			res.end(data);
		}
	});
});

app.listen(3000, function () {
	console.log("Server running at http://127.0.0.1:3000");
});

const mongoose = require('mongoose'),
      db = mongoose.connect('mongodb://localhost/kookmin-hackathon');
*/
/* Schema 선언 */
/*
var ArticleSchema = mongoose.Schema({
    name: String,
    number: Number,
    tag: String
});

var ok = db.model("Article", ArticleSchema, 'article');

ok.find({}, function(err, models) {
    if (err) return console.log(err);
    console.log("find() - "+models);
});
*/
	// start 버튼 없어짐
	// First-Page 투명도 낮아짐

	// 문제 시작
var cnt = 1;


function START_QUESTION() {

	$(".section").animate({
		"opacity": "1",
		"z-index": 8000
	});
	$("#First-Page").animate({
		"z-index": "1",
		"opacity": 0.2
	});

	$(".ans").click(function() {
		if (cnt == 1) {
			$("#foo1").animate({
				"opacity": 0
			});
			$("#foo2").animate({
				"opacity": 1
			});
		}
		if (cnt == 2) {	
			$("#foo2").animate({
				"opacity": 0
			});
			$("#foo3").animate({
				"opacity": 1
			});
		}
		if (cnt == 3) {
			$("#foo3").animate({
				"opacity": 0
			});
			$("#foo4").animate({
				"opacity": 1
			});
		}
		if (cnt == 4) {
			$("#foo4").animate({
				"opacity": 0
			});
			$("#foo5").animate({
				"opacity": 1
			});
		}
		if (cnt == 5) {
			$("#foo5").animate({
				"opacity": 0
			});
			$("#foo6").animate({
				"opacity": 1
			});
		}
		if (cnt == 6) {
			$("#foo6").animate({
				"opacity": 0
			});
			$("#foo7").animate({
				"opacity": 1
			});
		}
		if (cnt == 7) {
			$("#foo7").animate({
				"opacity": 0
			});
			$("#foo8").animate({
				"opacity": 1
			});
		}
		if (cnt == 8) {
			$("#foo8").animate({
				"opacity": 0
			});
			$("#foo9").animate({
				"opacity": 1
			});
		}
		if (cnt == 9) {
			$("#foo9").animate({
				"opacity": 0
			});
			$("#foo10").animate({
				"opacity": 1
			});
		}

        if (cnt == 10) {
        		$(".section>div").animate({
        		"opacity": 0
	        	});
        	
        	setTimeout(function() {

        		
	        	$("#food1").animate({
	        		"opacity": 1
	        	});
	        	$("#STEAK").animate({
	        		"opacity": 0.5
	        	});

	        	$("#First-Page").animate({
	        		"opacity": 0
	        	});
	        }, 1500);

        }
        
        cnt++;
	});

};
	



