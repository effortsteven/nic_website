
var response_data, url, auth_key;

// CMS server IP address
url = "https://motor.nictanzania.co.tz/";

// auth_key to access NIC APIs
auth_key = "effort";

class Connect {
    constructor() {
        var ip_address = url + "nic_website/website_endpoint/";
        $.ajax({
            url: ip_address,
            method: "GET",
            data: {
                "auth": auth_key,
            },
            async: false,
            success: function (response) {
                if (response.status) {
                    response_data = response
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
        var ip_address = url + "nic_website/emailApi/";
        $.ajax({
            url: ip_address,
            method: "GET",
            data: {
                "auth": auth_key,
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
    // filter_data_form(params) {
    //     return response_data[params];
    // }
}

new Connect_2();