module.exports.generate =function (data){
  const type1="abcdefghijklmnopqrstuvwxyz";
  const type2="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const type3="0123456789";
  const type4="!#$%&()*+,-./:;<=>?@[]^_{|}~"; 
  let AllChars="";
  const length=Number(data.extent)
  let password=''
  if (data.lowerCase==='on'){
    AllChars+=type1
  }
  if (data.upperCase==='on'){
    AllChars+=type2
  }
  if (data.number==='on'){
    AllChars+=type3
  }
  if (data.symbol==='on'){
    AllChars+=type4
  }
  while (password.length<length){
    password += AllChars[Math.floor(Math.random()*AllChars.length)]
  }
  return password ;
}
