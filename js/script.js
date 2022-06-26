const API_KEY = '579248a7aed1f4446311aa1419116039',
    API = 'https://api.openweathermap.org/data/2.5/'
    

const search = document.querySelector('.weather__input'),
    icon = document.querySelector('.weather__img img'),
    city = document.querySelector('.weather__city'),
    country = document.querySelector('.weather__country-mark'),
    degree = document.querySelector('.weather__degree span'),
    position = document.querySelector('.weather__position')
    
    
search.addEventListener('keypress', function (e) {
      if (e.keyCode == 13) {
          fetch(`${API}weather?q=${search.value}&appid=${API_KEY}`)
              .then(res => res.json())
              .then(data => info(data)) 
                  
      }
})    
    
function info(data) {
    changeIcon(data)
    city.innerHTML = data.name
    country.innerHTML = data.sys.country
    position.innerHTML = data.weather[0].main
    degree.innerHTML = Math.round(data.main.temp - 273.15)   
}
function changeIcon(data) {
    let img = data.weather[0].icon
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${img}@2x.png`)
}
