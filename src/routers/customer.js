
//get trend in until week
exports.findAllInWeeks = function(req, res) {
    var millis = Date.now() / 1000;
    var data_filtered = data.filter(data => data.company_name === req.params.company_name);
    var data_weekly_filtered1 = data_filtered.filter(data =>  millis - data.created_at > 0)
    var data_weekly_filtered = data_weekly_filtered1.filter(data =>  millis - data.created_at <  604800)
    var sum_data_all = data_filtered.length;

    var data_good_filtered = data_filtered.filter(data => data.sensitive === "1");
    var sum_data_good = data_good_filtered.length;
    
    var output = sum_data_good/sum_data_all * 100;
    res.status(200).json({"result": output}); 


};

exports.findAllReplyInWeeks = function(req, res){
    var millis = Date.now() / 1000;
    var data_filtered = data.filter(data => data.company_name == req.params.companyName);
    /*for (var i = 0;i<data_filtered.length;i++){
        console.log(data_filtered[i].created_at)
    }*/
    //var delta = millis - data_filtered.created_at
    var data_weekly_filtered1 = data_filtered.filter(data =>  millis - data.created_at > 0)
    var data_weekly_filtered = data_weekly_filtered1.filter(data =>  millis - data.created_at <  604800)
    //console.log(" weekly setelah hhhh " + data_weekly_filtered.length)
    
    
    //looping nyari most follower
    if (data_weekly_filtered.length == 1){
        res.status(200).json({"result": data_weekly_filtered}); 
    }else if (data_weekly_filtered.length == 0){
        res.status(404).json({"msg": "data not found"}); 
    }
    else {
        var temp = data_weekly_filtered[0];

        for(var i = 1; i < data_weekly_filtered.length; i++) {
            if (data_weekly_filtered[i].reply_count > temp.reply_count){
                temp = data_weekly_filtered[i];
            } 
        }
        res.status(200).json({"result": temp});        
    }
    
}

exports.findAllRetweetInWeeks = function(req, res){
    var millis = Date.now() / 1000;
    var data_filtered = data.filter(data => data.company_name == req.params.companyName);
    /*for (var i = 0;i<data_filtered.length;i++){
        console.log(data_filtered[i].created_at)
    }*/
    //var delta = millis - data_filtered.created_at
    var data_weekly_filtered1 = data_filtered.filter(data =>  millis - data.created_at > 0)
    var data_weekly_filtered = data_weekly_filtered1.filter(data =>  millis - data.created_at <  604800)
    //console.log(" weekly setelah hhhh " + data_weekly_filtered.length)
    
    
    //looping nyari most follower
    if (data_weekly_filtered.length == 1){
        res.status(200).json({"result": data_weekly_filtered}); 
    }else if (data_weekly_filtered.length == 0){
        res.status(404).json({"msg": "data not found"}); 
    }
    else {
        var temp = data_weekly_filtered[0];

        for(var i = 1; i < data_weekly_filtered.length; i++) {
            if (data_weekly_filtered[i].reply_count > temp.reply_count){
                temp = data_weekly_filtered[i];
            } 
        }
        res.status(200).json({"result": temp});        
    }
    
}

exports.findAllFavoriteInWeeks = function(req, res){
    var millis = Date.now() / 1000;
    var data_filtered = data.filter(data => data.company_name === req.params.companyName);
    var data_weekly_filtered1 = data_filtered.filter(data =>  millis - data.created_at > 0)
    var data_weekly_filtered = data_weekly_filtered1.filter(data =>  millis - data.created_at <  604800)
    //looping nyari most follower
    if (data_weekly_filtered.length == 1){
        res.status(200).json({"result": data_weekly_filtered}); 
    }else if (data_weekly_filtered.length == 0){
        res.status(404).json({"msg": "data not found"}); 
    }
    else {
        var temp = data_weekly_filtered[0];

        for(var i = 1; i < data_weekly_filtered.length; i++) {
            if (data_weekly_filtered[i].favorite_count > temp.favorite_count){
                temp = data_weekly_filtered[i];
            } 
        }
        res.status(200).json({"result": temp});        
    }
    
}


exports.findAllFollowerInWeeks = function(req, res){
    var millis = Date.now() / 1000;
    var data_filtered = data.filter(data => data.company_name === req.params.companyName);
    var data_weekly_filtered1 = data_filtered.filter(data =>  millis - data.created_at > 0)
    var data_weekly_filtered = data_weekly_filtered1.filter(data =>  millis - data.created_at <  604800)
    //looping nyari most follower
    if (data_weekly_filtered.length == 1){
        res.status(200).json({"result": data_weekly_filtered}); 
    }else if (data_weekly_filtered.length == 0){
        res.status(404).json({"msg": "data not found"}); 
    }
    else {
        var temp = data_weekly_filtered[0];

        for(var i = 1; i < data_weekly_filtered.length; i++) {
            if (data_weekly_filtered[i].follower_count > temp.follower_count){
                temp = data_weekly_filtered[i];
            } 
        }
        res.status(200).json({"result": temp});        
    }
    
}

exports.postData = function(req, res){
    var company_name = req.params.company_name;
    var replyCount = req.body.reply_count;
    var retweetCount = req.body.retweet_count;
    var favoriteCount = req.body.favorite_count;
    var followerCount = req.body.follower_count;


    var customerReview = new customer({
                company: company_name,
                reply_count: replyCount,
                retweet_count: retweetCount,
                favorite_count: favoriteCount,
                follower_count: followerCount
            });

    customerReview.save((err) => {
        if (err) 
            res.status(400).json({"msg": "something error"});
        else {
            res.status(200).json({"msg": "success"});
        }
    });
    
}
