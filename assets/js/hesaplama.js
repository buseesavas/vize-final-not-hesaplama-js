let vize = prompt('Vize notunuz kaç?');
let final = prompt('Final notunuz kaç?');
let ortalama = ((vize * 40) / 100) + ((final * 60) / 100);

if(ortalama >= 50){
  alert('Geçtiniz! Ortalamanız: ' + ortalama);
}else if((ortalama < 50) && (ortalama >= 40)){
  alert('Şartlı geçtiniz! Ortalamanız: ' + ortalama);
}else{
  alert('Kaldınız! Ortalamanız: ' + ortalama);
}
  