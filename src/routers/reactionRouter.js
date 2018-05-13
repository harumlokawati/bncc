exports.index = function(req, res) {
    console.log(data);

    var result = data.filter(data => data.company !== "tokopedia");
    console.log(result);
};

exports.others_reaction = function(req, res) {
    var data_filtered = data.filter(data => data.company !== req.params.company_name);
    var sum_data_all = data_filtered.length;
    var data_good_filtered = data_filtered.filter(data => data.sensitive === "1");
    var sum_data_good = data_good_filtered.length;

    var output = sum_data_good/sum_data_all * 100;
    res.status(200).json({"result": output});
};

exports.internal_reaction = function(req, res) {
    var data_filtered = data.filter(data => data.company === req.params.company_name);
    var sum_data_all = data_filtered.length;
    var data_good_filtered = data_filtered.filter(data => data.sensitive === "1");
    var sum_data_good = data_good_filtered.length;

    var output = sum_data_good/sum_data_all * 100;
    res.status(200).json({"result": output});
};