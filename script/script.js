// from line 2 to 8, is to toggle the navbar from and to hamburger menu. 
const toggleButton = document.getElementsByClassName('toggle-button')[0];

const navbarLinks = document.getElementById('headeroptions');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
})


//deal with the interactivity for the impact page
if ( document.URL.includes("impact.html") ) {
  const positiveimpact = document.getElementById('section-1').getElementsByTagName('a')[0];
  const negativeimpact = document.getElementById('section-2').getElementsByTagName('a')[0];
  const positiveimpactdiv = document.getElementById('section-1').getElementsByClassName('subsection');
  const negativeimpactdiv = document.getElementById('section-2').getElementsByClassName('subsection');

  positiveimpact.addEventListener('click', () => {
    if (positiveimpact.innerHTML == "Click to Show")
    {
      positiveimpact.innerHTML = "Click to Hide";
    }
    else
    {
      positiveimpact.innerHTML = "Click to Show";
    }
    
    for (let idx = 0; idx < positiveimpactdiv.length; idx++)
    {
      positiveimpactdiv[idx].classList.toggle('hide');
      positiveimpactdiv[idx].classList.toggle('flex');
    }
  })

  negativeimpact.addEventListener('click', () => {
    if (negativeimpact.innerHTML == "Click to Show")
    {
      negativeimpact.innerHTML = "Click to Hide";
    }
    else
    {
      negativeimpact.innerHTML = "Click to Show";
    }
    for (let idx = 0; idx < negativeimpactdiv.length; idx++)
    {
      negativeimpactdiv[idx].classList.toggle('hide');
      negativeimpactdiv[idx].classList.toggle('flex');
    }

  })
  
} 


if ( document.URL.includes("sgproblems.html") ) {
  const sgproblems1 = document.getElementById("section-1-paragraph");
  var sgproblems1state = 0;
  const sgproblems1next = document.getElementsByClassName('section')[0].getElementsByTagName('a')[1];
  const sgproblems1back = document.getElementsByClassName('section')[0].getElementsByTagName('a')[0];
  //create the text
  var text1 = document.createElement('p');
  text1.innerHTML = "The limited land in Singapore causes issues since land is needed for solar to work efficiently.";

  var text2 = document.createElement('p');
  text2.innerHTML = "The main issue is how can we use solar in Singapore despite the limited land?";

  var text3 = document.createElement('p');
  text3.innerHTML = "The Solution?";

  var text4 = document.createElement('p');
  text4.innerHTML = "Make use of the unused spaces on top of building";

  sgproblems1next.addEventListener('click', () => {
    sgproblems1state++;
    if (sgproblems1state > 4)
    {
      sgproblems1state = 4;
    }
    switch (sgproblems1state)
    {
    case 0:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
    case 1:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      sgproblems1.appendChild(text1);
      break;
    case 2:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      sgproblems1.appendChild(text2);
      break;
    case 3:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      sgproblems1.appendChild(text3);
      break;
    case 4:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      sgproblems1.appendChild(text4);
      break;
    }
  })


  sgproblems1back.addEventListener('click', () => {
    sgproblems1state--;
    if (sgproblems1state < 0)
    {
      sgproblems1state = 0;
    }
    switch (sgproblems1state)
    {
    case 0:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      break;
    case 1:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      sgproblems1.appendChild(text1);
      break;
    case 2:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      sgproblems1.appendChild(text2);
      break;
    case 3:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      sgproblems1.appendChild(text3);
      break;
    case 4:
      if (sgproblems1.childElementCount > 0)
      {
        while (sgproblems1.childElementCount > 0)
        {
          sgproblems1.removeChild(sgproblems1.lastChild);
        }
      }
      sgproblems1.appendChild(text4);
      break;
    }
  })

  //deal with the second next and back buttons
  const sgproblems2 = document.getElementById("section-2-paragraph");
  var sgproblems2state = 0;
  const sgproblems2next = document.getElementsByClassName('section')[1].getElementsByTagName('a')[1];
  const sgproblems2back = document.getElementsByClassName('section')[1].getElementsByTagName('a')[0];


  var text5 = document.createElement('p');
  text5.innerHTML = "The weather in Singapore is unreliable, have you had a day where it suddenly rains even though there was no sign of rain?";

  var text6 = document.createElement('p');
  text6.innerHTML = "There isn't really a solution to this issue since we do not have the technology to control the weather.";


  sgproblems2next.addEventListener('click', () => {
    sgproblems2state++;
    if (sgproblems2state > 2)
    {
      sgproblems2state = 2;
    }
    switch(sgproblems2state)
    {
      case 0:
        if (sgproblems2.childElementCount > 0)
        {
          while (sgproblems2.childElementCount > 0)
          {
            sgproblems2.removeChild(sgproblems2.lastChild);
          }
        }
        
        break;
      case 1:
        if (sgproblems2.childElementCount > 0)
        {
          while (sgproblems2.childElementCount > 0)
          {
            sgproblems2.removeChild(sgproblems2.lastChild);
          }
        }
        sgproblems2.appendChild(text5);
        break;
      case 2:
        if (sgproblems2.childElementCount > 0)
        {
          while (sgproblems2.childElementCount > 0)
          {
            sgproblems2.removeChild(sgproblems2.lastChild);
          }
        }
        sgproblems2.appendChild(text6);
        break;

    }
  })

  sgproblems2back.addEventListener('click', () => {
    sgproblems2state--;
    if (sgproblems2state < 0)
    {
      sgproblems2state = 0;
    }
    switch(sgproblems2state)
    {
      case 0:
        if (sgproblems2.childElementCount > 0)
        {
          while (sgproblems2.childElementCount > 0)
          {
            sgproblems2.removeChild(sgproblems2.lastChild);
          }
        }
        
        break;
      case 1:
        if (sgproblems2.childElementCount > 0)
        {
          while (sgproblems2.childElementCount > 0)
          {
            sgproblems2.removeChild(sgproblems2.lastChild);
          }
        }
        sgproblems2.appendChild(text5);
        break;
      case 2:
        if (sgproblems2.childElementCount > 0)
        {
          while (sgproblems2.childElementCount > 0)
          {
            sgproblems2.removeChild(sgproblems2.lastChild);
          }
        }
        sgproblems2.appendChild(text6);
        break;
        
    }
  })
}

function showCoords(event) {
  var x = event.clientX;
  var y = event.clientY;
  var coords = "X coords: " + x + ", Y coords: " + y;
  document.getElementById("demo").innerHTML = coords;
}

if ( document.URL.includes("howitwork.html") ) {


  //create the images for the conveyor belt
  var image = document.createElement('img');
  image.src = "../images/Aluminium.png"
  image.style.position = "absolute";
  image.style.height = "10vh";
  image.style.width = "180px";
  image.style.backgroundColor = "white";
  image.style.left = 0;

  document.getElementById("conveyor").getElementsByTagName('div')[0].appendChild(image);

  var image2 = document.createElement('img');
  image2.src = "../images/glass-panel.jpeg"
  image2.style.position = "absolute";
  image2.style.height = "10vh";
  image2.style.width = "180px";
  image2.style.backgroundColor = "white";
  image2.style.left = 0;

  document.getElementById("conveyor").getElementsByTagName('div')[0].appendChild(image2);

  var image3 = document.createElement('img');
  image3.src = "../images/plastic.png"
  image3.style.position = "absolute";
  image3.style.height = "10vh";
  image3.style.width = "180px";
  image3.style.backgroundColor = "white";
  image3.style.left = 0;

  document.getElementById("conveyor").getElementsByTagName('div')[0].appendChild(image3);

  var image4 = document.createElement('img');
  image4.src = "../images/silicon.jpg"
  image4.style.position = "absolute";
  image4.style.height = "10vh";
  image4.style.width = "180px";
  image4.style.backgroundColor = "white";
  image4.style.left = 0;

  document.getElementById("conveyor").getElementsByTagName('div')[0].appendChild(image4);

  document.getElementById('conveyor').getElementsByTagName('div')[1].style.left = document.body.clientWidth - 190 + 'px';

  //deal the first minigame
  document.getElementById("work-section-2").getElementsByTagName('a')[0].addEventListener('click', () => {
    var first = false;
    var second = false;
    var third = false;
    var fourth = false;

    //setup the images
    var time = 0;
    image.style.left = document.body.clientWidth * 0.91 + 'px';
    image.addEventListener('click', () => {
      if (first == false)
      {
        first = true;
        image.style.left = 0;
      }
    })
    
    image2.style.left = document.body.clientWidth * 0.91 + 'px';
    image2.addEventListener('click', () => {
      if (second == false)
      {
        second = true;
        image2.style.left = 0;
      }
    })
    image3.style.left = document.body.clientWidth * 0.91 + 'px';
    image3.addEventListener('click', () => {
      if (third == false)
      {
        third = true;
        image3.style.left = 0;
      }
    })
    image4.style.left = document.body.clientWidth * 0.91 + 'px';
    image4.addEventListener('click', () => {
      if (fourth == false)
      {
        fourth = true;
        image4.style.left = 0;
      }
    })
    //remove the start button
    var run = true;
    document.getElementById("work-section-2").getElementsByTagName('a')[0].style.display = "none";

    document.getElementById('work-section-2').getElementsByTagName('p')[0].classList.toggle('noshow');
    setInterval(() => {
      if (run == true)
      {
        
        //calculate the width of the page
        var width = document.body.clientWidth * 0.89;
  
        //move the targets
        if (first == false)
        {
          image.style.left = parseInt(image.style.left) - width * 0.0005 + 'px';
          if (parseInt(image.style.left) <= 0)
          {
            image.style.left = width + 'px';
          }
        }
        time += 20;
        if (time > 5000 && second == false)
        {
          image2.style.left = parseInt(image2.style.left) - width * 0.0005 + 'px';
          if (parseInt(image2.style.left) <= 0)
          {
            image2.style.left = width + 'px';
          }
        }
        if (time > 10000 && third == false)
        {
          image3.style.left = parseInt(image3.style.left) - width * 0.0005 + 'px';
          if (parseInt(image3.style.left) <= 0)
          {
            image3.style.left = width + 'px';
          }
        }
        if (time > 15000 && fourth == false)
        {
          image4.style.left = parseInt(image4.style.left) - width * 0.0005 + 'px';
          if (parseInt(image4.style.left) <= 0)
          {
            image4.style.left = width + 'px';
          }
        }
  
        if (third == true)
        {
          run = false;
          document.getElementById("work-section-2").getElementsByTagName('p')[0].classList.toggle('noshow');
        }

        if (first == true && second == true && fourth == true)
        {
          run = false;
          document.getElementById("work-section-2").getElementsByTagName('p')[1].classList.toggle('noshow');
        }
      }
    }, 20, 1);
  });

}