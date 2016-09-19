var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d'); 
  var earthAngle = 0;
  var upiterAngle = 0;
  var uranAngle = 0;

  var earth ={
    x: 320,
    y: 240,
    radius: 20,   
    color: 'rgba(102,217,239,.9)'   
  };
  var upiter ={
    x: 320,
    y: 240,
    radius: 25,   
    color: 'rgba(57,186,168, .8)'    
  };
  var uran ={
    x: 320,
    y: 240,
    radius: 30,    
    color: 'rgba(193,37,38,.8)'    
  }; 
  

  function draw(){  
           
      ctx.clearRect(0,0,640,480);  
      
      var vxe = Math.cos(earthAngle) * earth.radius*4;
      var vye = Math.sin(earthAngle) * earth.radius*4;
      var vxur = Math.cos(upiterAngle) * uran.radius*7;
      var vyur = Math.sin(upiterAngle) * uran.radius*7;   
      var vxup = Math.cos(uranAngle) * uran.radius*5;
      var vyup = Math.sin(uranAngle) * uran.radius*5; 

      ctx.beginPath();
      ctx.arc(earth.x + vxe, earth.y+vye, earth.radius, 0, Math.PI*2, true);      
      ctx.closePath();
      ctx.fillStyle = earth.color;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(upiter.x + vxup, upiter.y + vyup, upiter.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = upiter.color;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(uran.x + vxur, uran.y + vyur, uran.radius, 0, Math.PI*2, true);
      ctx.closePath();
      ctx.fillStyle = uran.color;
      ctx.fill();
      var img = new Image();   
      img.src = 'sun.png';
      ctx.drawImage(img,200,125);    
      

      earthAngle += 0.08;
      upiterAngle += 0.02;
      uranAngle += 0.04;
  window.requestAnimationFrame(draw);
}
draw();