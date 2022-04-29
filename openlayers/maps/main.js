window.onload = init;

function init (){
    const map = new ol.Map({
        target: 'map',
        controls: ol.control.defaults({ attribution: false }),
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })
        ],
        view: new ol.View({
          center: ol.proj.fromLonLat([42.9062, -0.0236]),
          zoom: 6,
          
        })
      });

      const view = map.getView();
      const zoom = view.getZoom();
      const center = view.getCenter();
      const rotation = view.getRotation();
      document.getElementById('zoom-out').onclick = function() {
          const view = map.getView();
          const zoom = view.getZoom();
          view.setZoom(zoom - 1);
      };
      document.getElementById('zoom-in').onclick = function() {
          const view = map.getView();
          const zoom = view.getZoom();
          view.setZoom(zoom + 1);
      };
      document.getElementById('zoom-panto').onclick = function() {
          const view = map.getView();
          const wh = ol.proj.fromLonLat([38.1238, -0.1965]);
          view.setCenter(wh);
          view.setZoom(+ 10);
      };
      document.getElementById('zoom-restore').onclick = function() {
          view.setCenter(center);
          view.setRotation(rotation);
          view.setZoom(zoom);
      };


}