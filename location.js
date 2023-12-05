const button=document.getElementById('getloc')
function getlocation(position){

}
function failed(){
    console.log('there was some issue');
}
button.addEventListener('click',async ()=>{
    const result=navigator.geolocation.getCurrentPosition(getlocation,failed)
})