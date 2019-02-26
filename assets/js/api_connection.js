
var response_data, url, developerToken;

// CMS server IP address
url = "https://motor.nictanzania.co.tz/";
// url = "http://192.168.137.219:8000/";

// developerToken to access NIC APIs
developerToken = "KZ3O5ONX0UZDRV7217LDGSWOXYK6SYLG";

class Connect {
    constructor() {
        var ip_address = url + "nic_website/website_endpoint/";
        $.ajax({
            url: ip_address,
            method: "GET",
            data: {
                "token": developerToken,
            },
            async: false,
            success: function (response) {
                if (response.status) {
                    response_data = response;
                    console.log('Connection successfull!');
                } else {
                    console.log('Access Denied ' + response.message);
                }
            }
        });
    }
    filter_data_form(params) {
        return response_data[params];
    }
}

class Connect_2 {
    constructor(news_id = 0, email_address) {
        let ip_address = url + "nic_website/emailApi/";
        $.ajax({
            url: ip_address,
            method: "GET",
            data: {
                "token": developerToken,
                "id": news_id,
                "email": email_address,
            },
            async: false,
            success: function (response) {
                if (response.status) {
                    console.log('Connection successfull!');
                } else {
                    console.log('Access Denied ' + response.message);
                }
            }
        });
    }
}

// new Connect_2();