var Sympt1=[];
var reco1='';
var reco2='';
var reco3='';
var reco4='';
var reco5='';
var reco6='';
var riskscore = 0;

function changetosym2() {
  if(document.getElementById('soreThroat').checked) {
  Sympt1.push(document.getElementById('soreThroat').value);  
  riskscore += 10; 
  }
  if(document.getElementById('fever').checked){
    Sympt1.push(document.getElementById('fever').value); 
    riskscore += 10; 
  }
  if(document.getElementById('cold').checked){
    Sympt1.push(document.getElementById('cold').value); 
    riskscore += 10; 
  }
  if(document.getElementById('cough').checked){
    Sympt1.push(document.getElementById('cough').value); 
    riskscore += 10; 
  }
  if(document.getElementById('breathing').checked){
    Sympt1.push(document.getElementById('breathing').value); 
    riskscore += 10; 
  }
  
  if(Sympt1.length > 0)
   {
    reco1 = "If you have "+Sympt1.join(', ')+" for more than 2 days then get tested for your self to nearest Covid19 test center or consult to your Physician as soon as possible.";
   }
   
   console.log ("riskscore : "+riskscore); 
   console.log (reco1);
  document.getElementById('symptom1').innerHTML="<div id='symptom2'><h2>2. Have you traveled outside of the country in the past 14 days?</h2>"+
    "<input type='radio' id='sym2yes' name='sym2radio' required>"+
    "<label for='Yes'>Yes</label>"+
    "<input type='radio' id='sym2no' name='sym2radio'>"+
    "<label for='No'>No</label>"+
    "<p><button onclick='changetosym3()'><span>Next</span></button></p></div>";
    
    }
  

  function changetosym3() {
    
    if(document.getElementById('sym2yes').checked)
     {
       reco2 = "If you have traveled COVID-19 high risk countries in last 14 days then then isolated/quarantined yourself for your and others safetly.. ";
       riskscore += 10;  
      }
    else if (document.getElementById('sym2no').checked)
    {
      reco2 = "Great!! It is always recommend to avoid unnecessary travel. You are really an responsible person."
    }
    
   else 
   {
     alert ("Please select the option");
     return false;
    }   
   
  console.log ("riskscore : "+riskscore);
  console.log ("Advise 2 : "+reco2);
  document.getElementById('symptom2').innerHTML="<div id='symptom3'><h2>3. In the past 7 days, have you been in contact with someone who tested positive for COVID-19?</h2>"+
    "<input type='radio' id='sym3yes' name='sym3radio' required><label for='Yes'>Yes</label><input type='radio' id='sym3no' name='sym3radio'><label for='No'>No</label>"+
    "<p><button onclick='changetosym4()'><span>Next</span></button></p></div>";
  }

  function changetosym4() {
    if(document.getElementById('sym3yes').checked)
     {
       reco3 = "It is advisable to get yourself tested for COVID-19 as soon as possible and make yourself isolated/quarantined till you gets negative";
       riskscore += 10;  
      }
    else if (document.getElementById('sym3no').checked)
    {
      reco3 = "Good!! keep follow social distancing and be a responsible citizen."
    }
    
   else 
   {
     alert ("Please select the option");
     return false;
    }   
   
    console.log ("riskscore : "+riskscore);
    console.log ("Advise 3 : "+reco3);
    document.getElementById('symptom3').innerHTML="<div id='symptom4'><h2>4. In the past 14 days, have you been in contact with someone who exhibited any symptoms related to COVID-19?</h2>"+
     "<input type='radio' id='sym4yes' name='sym4radio'><label for='Yes'>Yes</label><input type='radio' id='sym4no' name='sym4radio'><label for='No'>No</label>"+
     "<p><button onclick='changetosym5()'><span>Next</span></button></p></div>";
    }


  function changetosym5() {
    if(document.getElementById('sym4yes').checked)
     {
       reco4 = "It is advisable to get yourself tested for COVID-19 as soon as possible and make yourself isolated/quarantined till you gets negative";
       riskscore += 10;  
      }
    else if (document.getElementById('sym4no').checked)
    {
      reco4 = "Good!! keep follow social distancing and be a responsible citizen."
    }
    
   else 
   {
     alert ("Please select the option");
     return false;
    }   
   
    console.log ("riskscore : "+riskscore);
    console.log ("Advise 4 : "+reco4);
    
    document.getElementById('symptom4').innerHTML="<div id='symptom5'><h2>5. Are you using mask in public aera?</h2>"+
    "<input type='radio' id='sym5yes' name='sym5radio' required><label for='Yes'>Yes</label><input type='radio' id='sym5no' name='sym5radio'><label for='No'>No</label>"+
    "<p><button onclick='changetosym6()'><span>Next</span></button></p></div>";
   
  }

  function changetosym6() {
   
    if(document.getElementById('sym5yes').checked)
     {
       reco5 = "It is advisable to get yourself tested for COVID-19 as soon as possible and make yourself isolated/quarantined till you gets negative";
       riskscore += 10;  
      }
    else if (document.getElementById('sym5no').checked)
    {
      reco5 = "Good!! keep follow social distancing and be a responsible citizen."
    }
    
   else 
   {
     alert ("Please select the option");
     return false;
    }   
   
    console.log ("riskscore : "+riskscore);
    console.log ("Advise 5 : "+reco5);
   
    document.getElementById('symptom5').innerHTML="<div id='symptom6' align='center'><h2>6. Are you frequently washing/sanitize your hands?</h2>"+
    "<input type='radio' id='sym6yes' name='sym6radio' required><label for='Yes'>Yes</label><input type='radio' id='sym6no' name='sym6radio'><label for='No'>No</label>"+
    "<p><button onclick='Submit()'>Submit</button></p></div>";
   
  }

 function Submit() {
  
      document.getElementById("para").style.visibility = "hidden";
      document.getElementById('symptom6').innerHTML="<h2> Risk of Covid-19 Infection </h2> <div align='center' id='chart_div' style='width: 600px; height: 220px;'>";
      google.charts.load('current', {'packages':['gauge']});
      google.charts.setOnLoadCallback(drawChart);    
    }
  
 

  function drawChart() {

      var data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Risk', riskscore]
      ]);

      var options = {
        width: 600, height: 220,
        redFrom: 67, redTo: 100,
        yellowFrom: 34,yellowTo: 66,yellowColor: "#FFA500",
        greenFrom:0, greenTo: 33,
        minorTicks: 10,
        majorTicks: ['Low', 'Medium', 'High']
      };

      var chart = new google.visualization.Gauge(document.getElementById('chart_div'));
     chart.draw(data, options);
    } 

/*let element = document.querySelector('#gaugeArea')

// Properties of the gauge
let gaugeOptions = {
  hasNeedle: true,
  needleColor: 'gray',
  needleUpdateSpeed: 1000,
  arcColors: ['rgb(44, 151, 222)', 'lightgray'],
  arcDelimiters: [30],
  rangeLabel: ['0', '100'],
  centralLabel: '50',
}

// Drawing and updating the chart
GaugeChart.gaugeChart(element, 300, gaugeOptions).updateNeedle(50)*/