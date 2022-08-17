let clock = () => {
    let date = new Date();
    let hrs = date.getHours()
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
    let periodo = '☽';
if(hrs==0){
    hrs=00;
}
   else if (hrs >=12) {
        hrs = hrs - 12;
        periodo = '☀';
    }
   
    hrs = hrs < 10 ? "0" + hrs : hrs;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
   
    document.querySelector('.time').innerHTML = `${hrs}:${minutos}:${segundos}  ${periodo}`;

    setTimeout(clock, 1000);
};
clock();