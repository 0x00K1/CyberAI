var aText = new Array(
    "<span class='terminal__text__span'>hi, Welcome to CMDs area i'm CyberAI</span>",
    "<span class='terminal__text__span'>Your AI assistant.</span>", 
    "<span class='terminal__text__span'>based in K01</span>",
    "<span class='terminal__text__span'>prefix: $</span>",
    "<span class='terminal__text__span'>Commands: help, INFO, Reset, TC, history</span>",
    "<span class='terminal__text__span'> I have a mind and memory to communicate with you.</span>",
    "<span class='terminal__text__span'># # # # # # # # # # # # # # # # # # # # #</span>",
    "<span class='terminal__text__span'>see my portfolio on github</span>",
    "<span class='terminal__text__span'>and</span>",
    "<span class='terminal__text__span'>read my blog and twitter</span>",
    "<span class='terminal__text__span'>Thank you for using CyberAI!</span>",
    "<span class='terminal__text__span'>clear</span>",
  );
  var iSpeed = 97; 
  var iIndex = 0; 
  var iArrLength = aText[0].length; 
  var iScrollAt = 20; 
  
  var iTextPos = 0; 
  var sContents = ''; 
  var iRow; 
  
  function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");
  
    while (iRow < iIndex) {
      sContents += aText[iRow++] + '<br />';
    }
  
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  
    if (iTextPos++ == iArrLength) {
      iTextPos = 0;
      iIndex++;
  
      if (iIndex == aText.length) {
        iIndex = 0;
      }
  
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 200);
    } else {
      setTimeout("typewriter()", iSpeed);
    }
  }
  
  $(function() {
    $(".terminal").draggable();
  });
  
  typewriter();
  