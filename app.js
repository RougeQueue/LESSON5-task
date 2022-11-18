let num = 0;
let count =0;

while(num < 50){
  num = num + 1;
    count++;
  console.log(count);
  if(count % 10 == 0 , count < 50){
    console.log("今" + count + "回ループしました");
  }else if(num % 4 == 0) {
    console.log("今" + count + "回ループしました");
  }else if(count == 50){
    alert(count + "回カウントが終わりました");
  }
}

/*while(num < 50){
  num = num + 1;
    count++;
  console.log(count);
  if(count == 50){
    alert(count + "回カウントが終わりました");
  }else if(num % 4 == 0) {
    console.log("今" + count + "回ループしました");
  }else if
  (count % 10 == 0){
    console.log("今" + count + "回ループしました");
  }
}*/