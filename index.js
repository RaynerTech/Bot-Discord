const Discord = require('discord.js')

const botbot = new Discord.Client()
const config = require('./config.json')
const links = require('./links.json')

botbot.on('guildMemberAdd', member =>{
  member.guild.channels.get('739966463657640037').send(member.user.username + ' Entrou no Serve!! ')
  member.send('Bem vindo ao servidor')
})
   
botbot.on('ready' , () =>{
    botbot.user.setActivity('The Witcher')
    console.log('Logado')
    
  })


  botbot.on('message', message => {

    let responseObject ={
      "Oi" : "Olá eu sou a Ada, como vai ?, Vou te passar algumas opções 1 [Digite Links] Opção 2 [Digite: Meu criador] Opção 3 [Digite: Quem eu sou]  ",
      "links" : "https://www.twitch.tv/raynertech , https://nasa.gov , https://oglobo.globo.com/economia/emprego/mercado-de-tecnologia-tem-deficit-de-24-mil-profissionais-por-ano-24170633",  
      "Meu criador": "Rayner, é O meu criador, um grande estudioso da art da programção apaixonado por tecnologia Graduado em Ciencia da Computação. Atualente estudante de pós gradução e graduação de engenharia de software. https://github.com/RaynerTech ",
      "Quem eu sou": " Sou um algoritmo ainda em desenvolvimento, o meu criador Rayner me deu esse nome em homengem a primeira programadora da historia. Mais informacoes sobre a Grande Ada Lovelance.... https://pt.wikipedia.org/wiki/Ada_Lovelace Meu codigo foi postado no github do meu criador.... https://github.com/RaynerTech/Bot-Discord",
      
    }
    
  if(responseObject[message.content]){
      message.channel.send(responseObject[message.content])
    }
 
  })

botbot.login(config.token) 
  
    