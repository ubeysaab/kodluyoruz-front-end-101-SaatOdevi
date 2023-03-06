let hos=document.querySelector('#hosgeldin>span')


let name =prompt('Please give me your name')
try{
  if(!isNaN(name)){
    throw new Error('Please entern a valid Name ')
  }
  else{

    name =name[0].toUpperCase()+name.slice(1)
      hos.style.color=`#FF7A33`
      hos.innerHTML+=`${name}! `

  }
    
}
catch(e){
  alert(e.message)
  window.location.reload()

}


let saat=document.querySelector('#saat>h3')
function zamanGoster(){
  const gunler=['Sunday','Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday']
  let date =new Date()
  let h=date.getHours()
  let m=date.getMinutes()
  let s=date.getSeconds()
  let pmam='AM';
  let day = date.getDay()


  if(h>12){
    h=h-12
    pmam='PM'
  }
  else if(h==0){
    h=12
  }

  h=h<10?'0'+h:h

  s=s<10?'0'+s:s
  m=m<10?'0'+m:m



  let time=`${h} : ${m} : ${s}  ${pmam} <br> ${gunler[day]}`


  saat.innerHTML=time
  // saat.textContent=time

setTimeout(zamanGoster,1000)



}
zamanGoster()
