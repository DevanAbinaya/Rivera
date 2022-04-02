const { Client, MessageEmbed } = require("discord.js");
const cron = require('node-cron');
const client = require('../../index');
const ms = require('ms');

 // Channel ID (Optional)

client.on("ready", () => {
    const channel = client.channels.cache.get('927563716403269642')

    const embed1 = new MessageEmbed()
    .setColor("WHITE")
    .setTitle("🕌    SAHURRRRRRRR!!     🕌")
    .setDescription("**Good Morning Y'all !! | ||@everyone|| | SAHUR**\n Hari pertama puasa nih, Yok bangun yok!!\n> Waktu sahurnya masih ada sekitar `2 jam` lagi guys! Jangan sampe telat yaa! :hourglass: \n")
    .setFooter({text: `Buruan makan, entar siang laper nangis lagi`, iconURL: `${client.user.displayAvatarURL({dynamic: true, size: 512})}`})
    .setTimestamp();

    const embed2 = new MessageEmbed()
    .setColor("WHITE")
    .setTitle("🕌    SAHURRRRRRRR!!     🕌")
    .setDescription("**Good Morning Y'all !! | ||@everyone|| | SAHUR**\n Hari pertama puasa nih, Yok bangun yok!!\n> Waktu sahurnya masih ada sekitar `1,5 jam` lagi guys! Jangan sampe telat yaa! :hourglass: \n")
    .setFooter({text: `Buruan makan, entar siang laper nangis lagi`, iconURL: `${client.user.displayAvatarURL({dynamic: true, size: 512})}`})
    .setTimestamp();
    
    const embed3 = new MessageEmbed()
    .setColor("WHITE")
    .setTitle("🕌    SAHURRRRRRRR!!     🕌")
    .setDescription("**Good Morning Y'all !! | ||@everyone|| | SAHUR**\n Hari pertama puasa nih, Yok bangun yok!!\n> Waktu sahurnya masih ada sekitar `1 jam` lagi guys! Jangan sampe telat yaa! :hourglass: \n")
    .setFooter({text: `Buruan makan, entar siang laper nangis lagi`, iconURL: `${client.user.displayAvatarURL({dynamic: true, size: 512})}`})
    .setTimestamp();

    const embed4 = new MessageEmbed()
    .setColor("WHITE")
    .setTitle("🕌    SAHURRRRRRRR!!     🕌")
    .setDescription("**Good Morning Y'all !! | ||@everyone|| | SAHUR**\n Hari pertama puasa nih, Yok bangun yok!!\n> Waktu sahurnya masih ada sekitar `30 menit` lagi guys! Jangan sampe telat yaa! :hourglass: \n")
    .setFooter({text: `Buruan makan, entar siang laper nangis lagi`, iconURL: `${client.user.displayAvatarURL({dynamic: true, size: 512})}`})
    .setTimestamp();
    
    const embed5 = new MessageEmbed()
    .setColor("WHITE")
    .setTitle("🕌    SAHURRRRRRRR!!     🕌")
    .setDescription("**Dikit Lagi Imsak !! | ||@everyone|| | SAHUR**\n Hari pertama puasa nih, masa udah skip sahur sih? :v\n> Waktu menuju imsak tinggal `10 menit` lagi, Yang belom makan ayo makan! :hourglass: \n")
    .setFooter({text: `Buruan makan, entar siang laper nangis lagi`, iconURL: `${client.user.displayAvatarURL({dynamic: true, size: 512})}`})
    .setTimestamp();

    const embed6 = new MessageEmbed()
    .setColor("WHITE")
    .setTitle("🕌    SAHURRRRRRRR!!     🕌")
    .setDescription("**Selamat Berpuasa !! | ||@everyone|| | IMSAK**\n Waktu sahur sudah habis! Selamat untuk kalian yang sudah sempat makan, yang belum harap bersabar :v  \n")
    .setFooter({text: `MEMASUKI WAKTU IMSAK`, iconURL: `${client.user.displayAvatarURL({dynamic: true, size: 512})}`})
    .setTimestamp();

    cron.schedule('20 22 * * *', () => {
        channel.send({embeds: [embed1]}).then((m) => {
          m.react("🤍")

          function countdown() {
            setTimeout(() => {
              channel.send('@everyone').then((e) => {
                e.delete()
              })
            }, ms('1 seconds'));

            setTimeout(() => {
              channel.send('@everyone').then((e) => {
                e.delete()
              })
            }, ms('2 seconds'));

            setTimeout(() => {
              channel.send('@everyone').then((e) => {
                e.delete()
              })
            }, ms('3 seconds'));

            setTimeout(() => {
              m.edit({embeds: [embed2]})
            }, ms('30 minutes'));
            
            setTimeout(() => {
              m.edit({embeds: [embed3]})
            }, ms('1 hrs'));

            setTimeout(() => {
              m.edit({embeds: [embed4]})
            }, ms('1.5 hrs'));

            setTimeout(() => {
              m.edit({embeds: [embed5]})
            }, ms('110 minutes'));

            setTimeout(() => {
              channel.send('@everyone').then((e) => {
                e.delete()
              })
            }, ms('110 minutes'));

            setTimeout(() => {
              m.delete()
            }, ms('2 hrs'));

            setTimeout(() => {
              channel.send({embeds: [embed6]}).then((a) => {
                a.react("🤍")
              })
            }, ms('2 hrs'));

            setTimeout(() => {
              channel.send('@everyone').then((e) => {
                e.delete()
              })
            }, ms('2 hours'));
          }
          countdown();

          console.log("Scheduled event has been activated.")
        });

       }, {
         scheduled: true,
         timezone: "Asia/Jakarta"
       });

    });