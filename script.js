var apiUrl = "https://graph.facebook.com";
  
var verAPI = "v16.0"

var cuenta = "1522094337894169" //act_1522094337894169/

var filter = "insights?fields=account_id,campaign_id,campaign_name,clicks,cpc,cpm,frequency,impressions,reach,spend,date_start,date_stop&level=campaign&limit=1000&date_preset=last_month&time_increment=all_days"

var apiKey = "EAAOgcbfZC1QwBAAMct7kxDY3idBcHZAJpO8f6Fn9pszAAn1fiotYWaGNhYWVIvFIEdUn4knayYP0G0668HUc51J3zscd7KnOcaL23wk7NvEpkszwO6eJhrF2oZCN2fe30MBwMgvVn63FN6su1ANaayZA0BgvtVLcBAcY4qfcKVLjxHwWGou0MnZCUztpbe0RyN6XvcX8d1LIjQSFfjjjF"

var urlapi = apiUrl + "/" + verAPI + "/" + "act_" + cuenta + "/" + filter + "&access_token=" + apiKey
console.log(urlapi);