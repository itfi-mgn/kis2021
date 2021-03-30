function ju_ab_testing(){
  var newWidgets = [
    // {url: 'https://uberlaw.ru/js/4.2.35-2/wgt-loader.js'},
    {url: 'https://uberlaw.ru/js/4.2.36/wgt-loader.js'},
  ];

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var WidgetNubmer;

  if (localStorage.getItem('widgetLoaded')) {
    WidgetNubmer = newWidgets.length <= localStorage.getItem('widgetLoaded') ? newWidgets.length - 1 : localStorage.getItem('widgetLoaded');
    localStorage.setItem('widgetLoaded', WidgetNubmer);
  } else {
    WidgetNubmer = `${randomIntFromInterval(0, newWidgets.length - 1)}`;
    localStorage.setItem('widgetLoaded', WidgetNubmer);
  }
  var script = document.createElement('script');
  script.setAttribute('src', newWidgets[WidgetNubmer].url);
  document.querySelector('body').appendChild(script);


  // async function checkCity() {
  //   let wmId = window.jus_custom_param.webmaster.webmaster_id;
  //   let allowedWmIds = ['14337', '2853', '316', '14823', '14866', '10304'];
  //
  //   if (allowedWmIds.includes(wmId)) {
  //     let response = await fetch('https://wdgt.justiva.ru/geo-ip-city');
  //     if (response.ok) {
  //       let city = await response.text();
  //       // console.log(city);
  //       if (city === 'Moscow') {
  //         var script2 = document.createElement('script');
  //         script2.setAttribute('src', "https://dmp.one/sync?stock_key=6f4062c783ae9d0e8fc665a5741d4bd1");
  //         document.querySelector('body').appendChild(script2);
  //       }
  //     }
  //   }
  // }
  //
  // checkCity();


}
ju_ab_testing();
