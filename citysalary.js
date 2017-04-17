var citySalary = {
  cities: {
    kiyv: {
      artist: 9000,
      teacher:11000,
      programmer:13000,
      cook:7500,
      booker:7800,
      lawyer:10000,
    },
    lviv: {
      artist: 5000,
      teacher:4000,
      programmer:10000,
      cook:4000,
      booker:6500,
      lawyer:7000,
    },
    kharkiv: {
      artist: 8000,
      teacher:10000,
      programmer:12000,
      cook:7000,
      booker:7500,
      lawyer:9000,
    },
  },
  getSalary: function(city, job) {
      if (this.cities[city] === undefined)
       return 'city error';

      else if (this.cities[city][job] === undefined)
        return 'job error';
      else
      return this.cities[city][job];
    },
};
      var cityselect = document.getElementById('cityselect');
      var jobselect = document.getElementById('jobselect');
      var result = document.getElementById('result');

      cityselect.onchange = update;
      jobselect.onchange = update;

      function update() {
      var city = cityselect.options[cityselect.selectedIndex].value;
      var job = jobselect.options[jobselect.selectedIndex].value;
      var totalResult = citySalary.getSalary(city, job);

      if (totalResult === "job error"){
      result.innerHTML = "Data Error";
      return;
    };
    result.innerHTML = totalResult;
}
