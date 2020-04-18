var endpoint = "https://www.jsonstore.io/94efd93326c09d4795f22221f9a012d250b3b3baacb69daad04516ff17e59bad";

if (window.location.hash != "") {
    $.getJSON(endpoint + "/" + window.location.hash.substr(1), function (data) {
        data = data["result"];

        if (data != null) {
            window.location.href = data;
        }
    });
}