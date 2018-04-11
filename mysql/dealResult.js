
var mysql = require('mysql');

var pool = mysql.createPool({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'setdb'
});

function handleDisconnect(){
	pool.getConnection(function(err, connection){
		if(err) console.log('Failed to connect Mysql');
		else{
			console.log('Succeed in connecting');
		}
	});
}

pool.on('error', function(err){
	if(err.code == 'PROTOCOL_CONNECTION_LOST'){
		Console.log('Lost connection to Mysql');
		setTimeout(function(){
			handleDisconnect();
		}, 5000);
	}
	else {
		throw err;
	}
});
handleDisconnect();


var ans = [];
var sql = 'select cname, number from college';
pool.query(sql, function(err, result){
    if(err){
        console.log("error in select"+err);
    }
    else{
        console.log(result.length);
		for(i=0; i<result.length; i++){
			var item={};
			item.lables = result[i].cname;
			item.number = result[i].number;
			ans.push(item);
		}
        console.log(JSON.stringify(ans));
    }

});

