<template>
  <div class="survivors">
    <h1>Choose Your Survivor</h1>
    <br />
    <img :src="selectedSurvivor.image" alt="Click the survivor icon below!" />
    <h1 class="survName">{{ selectedSurvivor.name }}</h1>
    <br />
    <p>
      <img
        src="../assets/icons/survivor-icon.png"
        alt="Click here for a random survivor!"
        @click="rndSurv"
        width="90"
        height="90"
        class="survButton"
      />
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      survivorsArray: [
        {
          name: "Dwight Fairfield",
          image:
            "../assets/character-portraits/survivors/01-dwight-fairfield.png",
        },
        {
          name: "Meg Thomas",
          image: "../assets/character-portraits/survivors/02-meg-thomas.png",
        },
        {
          name: "Claudette Morel",
          image:
            "../assets/character-portraits/survivors/03-claudette-morel.png",
        },
        {
          name: "Jake Park",
          image: "../assets/character-portraits/survivors/04-jake-park.png",
        },
        {
          name: "Nea Karlsson",
          image: "../assets/character-portraits/survivors/05-nea-karlsson.png",
        },
        {
          name: 'William "Bill" Overbeck',
          image: "../assets/character-portraits/survivors/06-bill-overbeck.png",
        },
        {
          name: "David King",
          image: "../assets/character-portraits/survivors/07-david-king.png",
        },
        {
          name: "Laurie Strode",
          image: "../assets/character-portraits/survivors/08-laurie-strode.png",
        },
        {
          name: "Ace Visconti",
          image: "../assets/character-portraits/survivors/09-ace-visconti.png",
        },
        {
          name: "Feng Min",
          image: "../assets/character-portraits/survivors/10-feng-min.png",
        },
        {
          name: "Quentin Smith",
          image: "../assets/character-portraits/survivors/11-quentin-smith.png",
        },
        {
          name: "Detective David Tapp",
          image:
            "../assets/character-portraits/survivors/12-detective-david-tapp.png",
        },
        {
          name: "Kate Denson",
          image: "../assets/character-portraits/survivors/13-kate-denson.png",
        },
        {
          name: "Adam Francis",
          image: "../assets/character-portraits/survivors/14-adam-francis.png",
        },
        {
          name: "Jeff Johansen",
          image: "../assets/character-portraits/survivors/15-jeff-johansen.png",
        },
        {
          name: "Jane Romero",
          image: "../assets/character-portraits/survivors/16-jane-romero.png",
        },
        {
          name: "Ashley J. Williams",
          image: "../assets/character-portraits/survivors/17-ash-williams.png",
        },
        {
          name: "Nancy Wheeler",
          image: "../assets/character-portraits/survivors/18-nancy-wheeler.png",
        },
        {
          name: "Steve Harrington",
          image:
            "../assets/character-portraits/survivors/19-steve-harrington.png",
        },
        {
          name: "Jonathan Byers",
          image:
            "../assets/character-portraits/survivors/19a-jonathan-byers.png",
        },
        {
          name: "Yui Kimura",
          image: "../assets/character-portraits/survivors/20-yui-kimura.png",
        },
        {
          name: "Zarina Kassir",
          image: "../assets/character-portraits/survivors/21-zarina-kassir.png",
        },
        {
          name: "Cheryl Mason",
          image: "../assets/character-portraits/survivors/22-cheryl-mason.png",
        },
        {
          name: "Lisa Garland",
          image: "../assets/character-portraits/survivors/22a-lisa-garland.png",
        },
        {
          name: "Cybil Bennett",
          image:
            "../assets/character-portraits/survivors/22b-cybil-bennett.png",
        },
        {
          name: "James Sunderland",
          image:
            "../assets/character-portraits/survivors/22c-james-sunderland.png",
        },
        {
          name: "Felix Richter",
          image: "../assets/character-portraits/survivors/23-felix-richter.png",
        },
        {
          name: "Élodie Rakoto",
          image: "../assets/character-portraits/survivors/24-elodie-rakoto.png",
        },
        {
          name: "Yun-Jin Lee",
          image: "../assets/character-portraits/survivors/25-yun-jin-lee.png",
        },
        {
          name: "Jill Valentine",
          image:
            "../assets/character-portraits/survivors/26-jill-valentine.png",
        },
        {
          name: "Claire Redfield",
          image:
            "../assets/character-portraits/survivors/26a-claire-redfield.png",
        },
        {
          name: "Leon S. Kennedy",
          image:
            "../assets/character-portraits/survivors/27-leon-s-kennedy.png",
        },
        {
          name: "Chris Redfield",
          image:
            "../assets/character-portraits/survivors/27a-chris-redfield.png",
        },
        {
          name: "Mikaela Reid",
          image: "../assets/character-portraits/survivors/28-mikaela-reid.png",
        },
        {
          name: "Jonah Vasquez",
          image: "../assets/character-portraits/survivors/29-jonah-vasquez.png",
        },
        {
          name: "Yoichi Asakawa",
          image:
            "../assets/character-portraits/survivors/30-yoichi-asakawa.png",
        },
      ],
      selectedSurvivor: "",
    };
  },
  methods: {
    rndSurv() {
      const idx = Math.floor(Math.random() * this.survivorsArray.length);
      this.selectedSurvivor = this.survivorsArray[idx];
    },
  },
};
</script>

<style scoped>
h1 {
  color: white;
}

img {
  color: white;
}

.survivors {
  margin-top: 1.2rem;
}

.survButton {
  cursor: pointer;
}

.survButton:active {
  transform: translateY(4px);
}
</style>
