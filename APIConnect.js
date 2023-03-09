function importMetaMarketingAdsData() {

  // URL de META para poder llamar a la API
  var apiUrl = "https://graph.facebook.com";
  
  // Versión de la API
  var verAPI = "v16.0"

  // ID de la cuenta publicitaria a consultar los datos
  var cuenta = "1522094337894169" 

  // Filtros y otros parametros (pendiente de detallar)
  var filter = "insights?fields=account_id,campaign_id,campaign_name,clicks,cpc,cpm,frequency,impressions,reach,spend,date_start,date_stop&level=campaign&limit=1000&date_preset=last_month&time_increment=all_days"

  // API Key Pública
  var apiKey = "EAAOgcbfZC1QwBAAMct7kxDY3idBcHZAJpO8f6Fn9pszAAn1fiotYWaGNhYWVIvFIEdUn4knayYP0G0668HUc51J3zscd7KnOcaL23wk7NvEpkszwO6eJhrF2oZCN2fe30MBwMgvVn63FN6su1ANaayZA0BgvtVLcBAcY4qfcKVLjxHwWGou0MnZCUztpbe0RyN6XvcX8d1LIjQSFfjjjF"

  var apiURLMETA = apiUrl + "/" + verAPI + "/" + "act_" + cuenta + "/" + filter + "&access_token=" apikey

  var spreadsheetId = "14rbdS09bHKGtv3wIbxWLiPk_HjxrZ2FoQDdIs369G3g";
  var sheetName = "Hoja1";

  var response = UrlFetchApp.fetch(apiURLMETA);

  // Parse the API response and write the data to the Google Sheet
  var data = JSON.parse(response.getContentText());

  if (data && data.data) {
    var values = data.data.map(function(row) {
  return [
    row.account_id,
    row.campaign_id,
    row.campaign_name,
    row.clicks,
    row.cpc,
    row.cpm,
    row.frequency,
    row.impressions,
    row.reach,
    row.spend,
    row.date_start,
    row.date_stop
  ];
});
    var sheet = SpreadsheetApp.openById(spreadsheetId).getSheetByName(sheetName);
    sheet.getRange(2, 1, values.length, values[0].length).setValues(values);
  } else {
    Logger.log("API response did not contain expected data structure.");
  }
}