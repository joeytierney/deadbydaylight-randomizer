<template>
    <div class="killers">
      <h1>Choose Your Killer</h1>
      <br>
      <img :src="selectedKiller.image" alt="Click the killer icon below!" />
      <h1>{{ selectedKiller.name }}</h1>
      <h3>{{ selectedKiller.realName }}</h3>
      <br>
      <p><img src="../assets/icons/killer-icon.png" alt="Click here for a random Killer!" @click="rndKiller" width="90" height="90" class="killerButton"></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      killersArray: [
        {name: 'The Trapper', image: '../assets/character-portraits/killers/01-the-trapper.png', realName: 'Evan MacMillan'},
        {name: 'The Krampus', image: '../assets/character-portraits/killers/01a-the-krampus.png', realName: ''},
        {name: 'The Wraith', image: '../assets/character-portraits/killers/02-the-wraith.png', realName: 'Philip Ojomo'},
        {name: 'The Hillbilly', image: '../assets/character-portraits/killers/03-the-hillbilly.png', realName: 'Max Thompson Jr.'},
        {name: 'The Nurse', image: '../assets/character-portraits/killers/04-the-nurse.png', realName: 'Sally Smithson'},
        {name: 'The Shape', image: '../assets/character-portraits/killers/05-the-shape.png', realName: 'Michael Myers'},
        {name: 'The Hag', image: '../assets/character-portraits/killers/06-the-hag.png', realName: 'Lisa Sherwood'},
        {name: 'The Doctor', image: '../assets/character-portraits/killers/07-the-doctor.png', realName: 'Herman Carter'},
        {name: 'The Look-See', image: '../assets/character-portraits/killers/07a-the-look-see.png', realName: ''},
        {name: 'The Huntress', image: '../assets/character-portraits/killers/08-the-huntress.png', realName: 'Anna'},
        {name: 'The Mordeo', image: '../assets/character-portraits/killers/08a-the-mordeo.png', realName: ''},
        {name: 'The Baba Yaga', image: '../assets/character-portraits/killers/08b-the-baba-yaga.png', realName: ''},
        {name: 'The Cannibal', image: '../assets/character-portraits/killers/09-the-cannibal.png', realName: 'Bubba Sawyer'},
        {name: 'The Nightmare', image: '../assets/character-portraits/killers/10-the-nightmare.png', realName: 'Freddy Krueger'},
        {name: 'The Pig', image: '../assets/character-portraits/killers/11-the-pig.png', realName: 'Amanda Young'},
        {name: 'The Clown', image: '../assets/character-portraits/killers/12-the-clown.png', realName: 'Jeffrey Hawk'},
        {name: 'The Spirit', image: '../assets/character-portraits/killers/13-the-spirit.png', realName: 'Rin Yamaoka'},
        {name: 'The Legion', image: '../assets/character-portraits/killers/14-the-legion.png', realName: 'Frank, Julie, Susie & Joey'},
        {name: 'The Plague', image: '../assets/character-portraits/killers/15-the-plague.png', realName: 'Adiris'},
        {name: 'The Ghost Face', image: '../assets/character-portraits/killers/16-the-ghost-face.png', realName: 'Danny Johnson'},
        {name: 'The Demogorgon', image: '../assets/character-portraits/killers/17-the-demogorgon.png', realName: ''},
        {name: 'The Oni', image: '../assets/character-portraits/killers/18-the-oni.png', realName: 'Kazan Yamaoka'},
        {name: 'The Minotaur', image: '../assets/character-portraits/killers/18a-the-minotaur.png', realName: ''},
        {name: 'The Deathslinger', image: '../assets/character-portraits/killers/19-the-deathslinger.png', realName: 'Caleb Quinn'},
        {name: 'The Executioner', image: '../assets/character-portraits/killers/20-the-executioner.png', realName: 'Pyramid Head'},
        {name: 'The Blight', image: '../assets/character-portraits/killers/21-the-blight.png', realName: 'Talbot Grimes'},
        {name: 'The Ferryman', image: '../assets/character-portraits/killers/21a-the-ferryman.png', realName: ''},
        {name: 'The Twins', image: '../assets/character-portraits/killers/22-the-twins.png', realName: 'Victor & Charlotte Deshayes'},
        {name: 'The Trickster', image: '../assets/character-portraits/killers/23-the-trickster.png', realName: 'Ji-Woon Hak'},
        {name: 'The Nemesis', image: '../assets/character-portraits/killers/24-the-nemesis.png', realName: 'Nemesis T-Type'},
        {name: 'The Cenobite', image: '../assets/character-portraits/killers/25-the-cenobite.png', realName: 'Elliot Spencer'},
        {name: 'The Chatterer', image: '../assets/character-portraits/killers/25a-the-chatterer.png', realName: 'Jim'},
        {name: 'The Artist', image: '../assets/character-portraits/killers/26-the-artist.png', realName: 'Carmina Mora'},
        {name: 'The Onryō', image: '../assets/character-portraits/killers/27-the-onryo.png', realName: 'Sadako Yamamura'}
      ],
      selectedKiller: ''
    }
  },
  methods: {
    rndKiller() {
      const idx = Math.floor(Math.random() * this.killersArray.length)
      this.selectedKiller = this.killersArray[idx]
      document.getElementById('killerButton').focus();
    }
  },
}
</script>

<style scoped>
h1 {
  color: white;
}

h3 {
  color: #aa0101;
}

img {
  color: white;
}

.killers {
  margin-top: 1.2rem;
}

.killerButton {
  cursor: pointer;
}

.killerButton:active {
  transform: translateY(4px);
}
</style>