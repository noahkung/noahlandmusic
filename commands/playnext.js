const { AudioPlayerStatus } = require('@discordjs/voice');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'playnext',
    description: 'ข้ามเพลงทั้งหมดและเล่นเพลงใหม่เป็นอันดับ 1 ในคิว',
    permissions: '0x0000000000000800', // สิทธิ์การเข้าถึง
    run: async (client, interaction) => {
        // ดึงข้อมูล player ของ server
        const player = client.players.get(interaction.guild.id);
        
        // ตรวจสอบว่า player มีอยู่หรือไม่
        if (!player || player.queue.length === 0) {
            return interaction.reply('ไม่มีเพลงในคิวตอนนี้');
        }

        // ดึงเพลงใหม่ที่เพิ่มเข้ามา
        const newSong = interaction.options.getString('song'); // สมมุติว่าเพลงที่ใหม่ถูกส่งเข้ามา

        // ถ้ามีเพลงใหม่ที่เพิ่มเข้ามา
        if (newSong) {
            // ข้ามเพลงทั้งหมดในคิว
            player.stop(); // หยุดเพลงที่กำลังเล่นอยู่
            player.queue = []; // เคลียร์คิวทั้งหมด

            // เพิ่มเพลงใหม่ไปที่อันดับ 1
            player.queue.unshift({ name: newSong, url: newSong });  // สมมุติว่าเป็นชื่อเพลงที่รับมาจากผู้ใช้

            // เล่นเพลงที่ถูกเพิ่มเข้าไปใหม่
            player.play(player.queue[0]);

            const embed = new EmbedBuilder()
                .setColor('#00ff00')
                .setTitle('ข้ามเพลงทั้งหมดและเล่นเพลงใหม่')
                .setDescription(`เพลง **${newSong}** ถูกเพิ่มเข้าไปและกำลังเล่นเป็นอันดับ 1`);

            return interaction.reply({ embeds: [embed] });
        } else {
            return interaction.reply('โปรดระบุเพลงใหม่ที่จะเล่น');
        }
    },
};
