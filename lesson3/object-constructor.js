var hotel = new Object();
    hotel.name ="Park";
    hotel.room =120;
    hotel.booked = 77;
    hotel.checkAvailability = function(){
        return this.room - this.booked;
  };
  var elName = document.getElementById('hotelName');
  elName.textContent = hotel.name;
  var elRooms = document.getElementById('rooms');
  elRooms.textContent = hotel.checkAvailability();