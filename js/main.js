$(function(){
    $('.cuenta-regresiva').countdown('2020/12/31 00:00:00', function(event){
      $('#dias').html(event.strftime('%D'));
      $('#horas').html(event.strftime('%H'));
      $('#minutos').html(event.strftime('%M'));
      $('#segundos').html(event.strftime('%S'));
    });
});
