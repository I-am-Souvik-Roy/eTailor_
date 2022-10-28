const button = document.queryselector("button");

button.addEventListener("click", ()=>{
	if (navigator.geolocation){
		button.innerText="Allow to access the Location";
		navigator.geolocation.getCurrentPosition(onSuccess, onError);
			}else{
				button.innerText="Your browser does not support";
			}
});


function onSuccess(position){

	button.innerText="Detecting your Location...";

let{latitude, longitude}=position.coords;
fetch('https://api.opencagedata.com/geocode/v1/json?q=&{latitude}+&{longitude}&key=8cc4c746601e48f5ba9c8ea7a845b48a')
.then(response=> console.log(response.json()).then(result=>{
	let allDetails = result.results[0].components;
	let{county,postcode,country}= allDetails;
	button.innerText'&{county} &{postcode}, &{country}';
    console.table(allDetails);
}).catch(()=>{
	button.innerText="Something went wrong";
})
}

function onError(error){

	if(error.code ==1){
		button.innerText="You denied the access";
	}
	else if (error.code ==2){
		button.innerText="Location is not available";
	}else{
		button.innerText="Something went wrong";
	}
}

button.setAttribute("disabled", "true");

//popup script:-

let popup=document.getElementById('popup');
    
    function openpopup(){
     	popup.classList.add("open-popup");
     } 

     function closepopup(){
     	popup.classList.remove("open-popup");
     } 

