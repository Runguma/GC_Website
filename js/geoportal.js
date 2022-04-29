window.onload = init;

function init (){
    const map = new ol.Map({
        target: 'geomap',
        controls: ol.control.defaults({ attribution: false, zoom : false}),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.XYZ({
                url:'https://api.mapbox.com/styles/v1/unrunguma/ckhw8jy0914hx19pqe3aaem6o/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidW5ydW5ndW1hIiwiYSI6ImNraDMzdHFybDBsMGozMGxzbnNjODJrdWMifQ.xSO0uCJfC4jND_q5-b2TAA'
                
                 
              }),
              visible:true,
              title: 'Mapbox Basic'
    
        })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([37.8238, - 0.1965]),
          zoom: 10,
          
        })
      });

    

      const view = map.getView();
      const zoom = view.getZoom();
      const center = view.getCenter();
      const rotation = view.getRotation();
      document.getElementById('zoom-out').onclick = function() {
          const view = map.getView();
          const zoom = view.getZoom();
          
          map.getView().animate({
            zoom: map.getView().getZoom() - 1,
            duration: 400
          })
      };
      document.getElementById('zoom-in').onclick = function() {
          const view = map.getView();
          const zoom = view.getZoom();
          //view.setZoom(zoom + 1);
          map.getView().animate({
            zoom: map.getView().getZoom() + 1,
            duration: 400
          })
      };
      document.getElementById('zoom-panto').onclick = function() {
          const view = map.getView();
          const wh = ol.proj.fromLonLat([37.9062, -0.0236]);
          
          view.setCenter(wh);
          view.setZoom(+ 6);

          
      };
      document.getElementById('zoom-restore').onclick = function() {
          view.setCenter(center);
          view.setRotation(rotation);
          view.setZoom(zoom);
      };


}