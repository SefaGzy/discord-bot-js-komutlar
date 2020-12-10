const Discord = require("discord.js");
const moment = require("moment");
var green = process.env.NODE_DISABLE_COLORS ? '' : '\x1b[32m';

require("moment-duration-format");

module.exports.run = (client, msg) => {
  name: 'yardım',
  description: 'Tüm komutları listeler. İsterseniz bir komut hakkında yardım eder..',
  usage: 'yardım',

  const duration = moment.duration(client.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
  msg.channel.sendCode("asciidoc", `⇝ Not:Komutlar "/" ile baslar
Kaplan Yardım Menüsü	
• /istatistik  :: Bot Istatistiligini Gosterir.
• /sunucubilgi :: Sunucu Bilgisini Gosterir.
• /yapimci     :: Bot Yapimcisini Gosterir.	
• /otorol      :: Gelen Kişilere Belirlenen Rolü verir.
• /sunucu-kur1 :: Hazır Sunucu Kurulum Yapar.
• /ban         :: İstediğiniz kişiyi sunucudan yasaklar.
• /avatar      :: İstediğiniz kişinin avatarını verir.`);
  };

};
