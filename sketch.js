var dragaoquepareceumalagartixacomcaibra
var chaododragãoquepareceumalagartixacomcaibra
var dragaoquepareceumalagartixacomcaibraAnimation
var chaododragãoquepareceumalagartixacomcaibraAnimation
var spike1
var spike2
var spike3
var spike
var nuvensdodragãoquepareceumalagartichacomcaibra
var nuvensdodragãoquepareceumalagartichacomcaibraAnimation
var claudeteGameState="play"
var groupNuvens
var groupSpikes
var bottonGo
var bottonGoAnimation
var playSound
var playSoud
var pontuation=0
var morteviolentadodragaoquepareceumalagartixacomcaibra

function preload (){
  dragaoquepareceumalagartixacomcaibraAnimation=loadAnimation("l0_sprite_1.png","l0_sprite_2.png","l0_sprite_3.png","l0_sprite_4.png","l0_sprite_5.png")
  chaododragãoquepareceumalagartixacomcaibraAnimation=loadImage("ground2.png")
  nuvensdodragãoquepareceumalagartichacomcaibraAnimation=loadImage("sprite_3.png")
   spike1=loadImage("sprite_0.png")
   spike2=loadImage("sprite_1.png")
   spike3=loadImage("sprite_2.png")
   bottonGoAnimation=loadImage("Go.png")
   playSound=loadSound("sound.wav")
  playSoud=loadSound("roblox-death-sound_1.mp3")
  morteviolentadodragaoquepareceumalagartixacomcaibra=loadAnimation("morteviolentadodragaoquepareceumalagartixacomcaibra.png")
}

function setup() {
createCanvas(windowWidth,windowHeight)
dragaoquepareceumalagartixacomcaibra=createSprite(50,height/2)
dragaoquepareceumalagartixacomcaibra.addAnimation("dragaoquepareceumalagartixacomcaibra",dragaoquepareceumalagartixacomcaibraAnimation)
dragaoquepareceumalagartixacomcaibra.addAnimation("morteviolentadodragaoquepareceumalagartixacomcaibra",morteviolentadodragaoquepareceumalagartixacomcaibra)
chaododragãoquepareceumalagartixacomcaibra=createSprite(width/2,height-50)
chaododragãoquepareceumalagartixacomcaibra.addImage( "chaododragãoquepareceumalagartixacomcaibra", chaododragãoquepareceumalagartixacomcaibraAnimation)
chaododragãoquepareceumalagartixacomcaibra.velocityX= -20
bottonGo=createSprite(width/2,height/2)
groupNuvens=new Group()
groupSpikes=new Group() 
dragaoquepareceumalagartixacomcaibra.setCollider("rectangle", 0, 0, 30, 30)
bottonGo.visible=false
bottonGo.addImage(bottonGoAnimation)
bottonGo.scale=0.1

}
function draw() {
   
                             
background("darkBlue")

    drawSprites();
  
  if (claudeteGameState=="play") {
  if (touches.length>0||keyDown("space")){
    dragaoquepareceumalagartixacomcaibra.velocityY=-7
    touches=[]
   } 
  if (keyWentDown("space")){
     playSound.play()
 
  }
   pontuation=pontuation+Math.round(getFrameRate()/60)
  dragaoquepareceumalagartixacomcaibra.velocityY+= 0.5

  if ( chaododragãoquepareceumalagartixacomcaibra.x<0){
    chaododragãoquepareceumalagartixacomcaibra.x= chaododragãoquepareceumalagartixacomcaibra.width/2
  }
  createCloudFromHell()
  createSpikes()
  chaododragãoquepareceumalagartixacomcaibra.velocityX= -(20 + 3* pontuation/100)

  
  if (dragaoquepareceumalagartixacomcaibra.isTouching(chaododragãoquepareceumalagartixacomcaibra)){
    claudeteGameState="end"
    playSoud.play()
  }
  if (dragaoquepareceumalagartixacomcaibra.isTouching(groupNuvens)){
    claudeteGameState="end"
    playSoud.play()
  }
  if (dragaoquepareceumalagartixacomcaibra.isTouching(groupSpikes)){
    claudeteGameState="end"
    playSoud.play()
  }
}
  else if(claudeteGameState=="end"){
    groupNuvens.setVelocityXEach(0)
    groupSpikes.setVelocityXEach(0)
    chaododragãoquepareceumalagartixacomcaibra.velocityX=0
    dragaoquepareceumalagartixacomcaibra.velocityY=0
    groupSpikes.setLifetimeEach(9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)
    groupNuvens.setLifetimeEach(9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999)
    bottonGo.visible=true
    if (touches.length>0||mousePressedOver(bottonGo)){
      restart()
      touches=[]
    }
    pontuation=0
    if (dragaoquepareceumalagartixacomcaibra.isTouching(chaododragãoquepareceumalagartixacomcaibra)) {
   dragaoquepareceumalagartixacomcaibra.changeAnimation ("morteviolentadodragaoquepareceumalagartixacomcaibra")
   dragaoquepareceumalagartixacomcaibra.scale=0.025
  
  }
  }
  
}


function createCloudFromHell(){
  if(frameCount%40 === 0) {
nuvensdodragãoquepareceumalagartichacomcaibra=createSprite( width+500, height-450)
nuvensdodragãoquepareceumalagartichacomcaibra.addImage("nuvensdodragãoquepareceumalagartichacomcaibra",nuvensdodragãoquepareceumalagartichacomcaibraAnimation)
nuvensdodragãoquepareceumalagartichacomcaibra.scale=0.25
nuvensdodragãoquepareceumalagartichacomcaibra.velocityX = -20
groupNuvens.add(nuvensdodragãoquepareceumalagartichacomcaibra)
nuvensdodragãoquepareceumalagartichacomcaibra.lifetime=120
bottonGo.depth=nuvensdodragãoquepareceumalagartichacomcaibra.depth
bottonGo.depth+=1

}
}
function createSpikes(){
  if(frameCount%100==0){
    spike=createSprite(width, height-75)
    spike.velocityX= -(20 + 3* pontuation/100)
    spike.lifetime=120
    groupSpikes.add(spike)
var qlqrcoisaloca=Math.round(random(1,3))

switch (qlqrcoisaloca) {
  case 1:spike.addImage(spike1)
  spike.scale=0.02
    break;
  case 2:spike.addImage(spike2)
  spike.scale=0.02
    break;
  case 3:spike.addImage(spike3)
  spike.scale=0.025
  
    break;

  default:
    break;
}
  }

 
} 

function restart(){
claudeteGameState="play"
groupNuvens.destroyEach()
groupSpikes.destroyEach()
bottonGo.visible=false
dragaoquepareceumalagartixacomcaibra.y=height/2
chaododragãoquepareceumalagartixacomcaibra.velocityX=-20
  
dragaoquepareceumalagartixacomcaibra.changeAnimation("dragaoquepareceumalagartixacomcaibra")
dragaoquepareceumalagartixacomcaibra.scale=1

}