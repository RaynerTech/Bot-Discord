const Discord = require('discord.js')

const botbot = new Discord.Client()
const config = require('./config.json')
const links = require('./links.json')


botbot.on('ready' , () =>{
    botbot.user.setActivity('The Witcher')
    console.log('Logado')
    
  })

  

  
  botbot.on('message', message => {

 
    if(message.content === 'Oi Ada' ){
      message.reply('Ola, eu sou a Ada passarei algumas opções:')

      message.reply('Opção ([A] Meu Criador ) \n Opção ([B] Quem sou) \n Opção([C] Links)')
    
    }

    if(message.content === 'A'){
        message.reply('Rayner é o meu criador, Um grande estudioso da art da programção apaixonado por tecnologia Graduado em Ciencia da Computação. Atualente estudante de pós gradução e graduação de engenharia de software.')

    }
    else if(message.content === 'B'){
        message.reply('Eu sou a Ada, recebe esse nome do meu criador em homenagem a primeira programadora da historia. Saiba mais....https://pt.wikipedia.org/wiki/Ada_Lovelace')
    }
    else if(message.content === 'C'){
        message.reply('talvez vc goste: http://google.com : http://nasa.gov : https://oglobo.globo.com/economia/emprego/mercado-de-tecnologia-tem-deficit-de-24-mil-profissionais-por-ano-24170633')
    }

    

  
  })
     

botbot.login(config.token)
  
    