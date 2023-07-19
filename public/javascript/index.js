module.exports.generate =function (data){
  const type1="abcdefghijklmnopqrstuvwxyz";
  const type2="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const type3="0123456789";
  const type4="!#$%&()*+,-./:;<=>?@[]^_{|}~"; 
  let allChars="";
  const length=Number(data.extent)
  let password=''
  if (data.lowerCase==='on'){
    allChars+=type1
  }
  if (data.upperCase==='on'){
    allChars+=type2
  }
  if (data.number==='on'){
    allChars+=type3
  }
  if (data.symbol==='on'){
    allChars+=type4
  }
  if (data.exclude){
    // console.log("exclude" + data.exclude)
    allChars = excludeChars(allChars)
  }
 

  while (password.length<length){
    password += allChars[Math.floor(Math.random()*allChars.length)]
  }
  return password ;



function excludeChars(string){ //放在外面會讀不到data
  let charArr = Array.from(string)
  let excludeCharArr = [...new Set(Array.from(data.exclude))] //字串只需要剔除一次，轉集合再展開回陣列去重複
  charArr = charArr.filter(
    char=>!excludeCharArr.includes(char)
  )
  return charArr.join('')
}


}

