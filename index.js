const giftGiver=['Guadalupe','Ollie','Aki']

const giftType='surprise'

function writeCards(giftGiver,giftType){
  const thankYouCards=[]
  for(let i=0;i<giftGiver.length;i++){
    thankYouCards.push(`Thank you, ${giftGiver[i]}, for the wonderful ${giftType} gift!`)
  }
  return thankYouCards
}

function countDown(number){
  while(number>=0){
    console.log(number)
    number--
  }
}