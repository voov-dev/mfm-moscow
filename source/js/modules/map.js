import ymaps from 'ymaps';

const initMap = () => {
  if (document.getElementById('map')) {
    ymaps
      .load('https://api-maps.yandex.ru/2.1/?lang=ru_RU')
      .then((maps) => {
        const myMap = new maps.Map('map', {
          center: [54.582105, 39.727724], zoom: 17, controls: [],
        });
        const myPlacemark = createPlacemark([54.582105, 39.727724]);
        myMap.geoObjects.add(myPlacemark);

        function createPlacemark(coords) {
          return new maps.Placemark(coords, {
            type: 'Point',
          }, {
            preset: 'islands#blueFactoryIcon',
            draggable: false,
          });
        }
      })
      // eslint-disable-next-line no-console
      .catch((error) => console.log('Failed to load Yandex Maps', error));
  }
};

export {initMap};
