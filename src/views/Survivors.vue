<template>
    <div id="survivors">
      <h3>Choose Your Survivor</h3>
      <img :src="selectedImage" alt="Click the survivor icon below!" width="180" height="250"/>
      <p><img src="/assets/icons/survivor-icon.png" alt="Click here for a random survivor!" @click="rndSurv" width="90" height="90"></p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        '/assets/character-portraits/survivors/01-dwight-fairfield.png',
        '/assets/character-portraits/survivors/02-meg-thomas.png',
        '/assets/character-portraits/survivors/03-claudette-morel.png',
        '/assets/character-portraits/survivors/04-jake-park.png',
        '/assets/character-portraits/survivors/05-nea-karlsson.png',
        '/assets/character-portraits/survivors/06-bill-overbeck.png',
        '/assets/character-portraits/survivors/07-david-king.png',
        '/assets/character-portraits/survivors/08-laurie-strode.png',
        '/assets/character-portraits/survivors/09-ace-visconti.png',
        '/assets/character-portraits/survivors/10-feng-min.png',
        '/assets/character-portraits/survivors/11-quentin-smith.png',
        '/assets/character-portraits/survivors/12-detective-david-tapp.png',
        '/assets/character-portraits/survivors/13-kate-denson.png',
        '/assets/character-portraits/survivors/14-adam-francis.png',
        '/assets/character-portraits/survivors/15-jeff-johansen.png',
        '/assets/character-portraits/survivors/16-jane-romero.png',
        '/assets/character-portraits/survivors/17-ash-williams.png',
        '/assets/character-portraits/survivors/18-nancy-wheeler.png',
        '/assets/character-portraits/survivors/19-steve-harrington.png',
        '/assets/character-portraits/survivors/19a-jonathan-byers.png',
        '/assets/character-portraits/survivors/20-yui-kimura.png',
        '/assets/character-portraits/survivors/21-zarina-kassir.png',
        '/assets/character-portraits/survivors/22-cheryl-mason.png',
        '/assets/character-portraits/survivors/22a-lisa-garland.png',
        '/assets/character-portraits/survivors/22b-cybil-bennett.png',
        '/assets/character-portraits/survivors/22c-james-sunderland.png',
        '/assets/character-portraits/survivors/23-felix-richter.png',
        '/assets/character-portraits/survivors/24-elodie-rakoto.png',
        '/assets/character-portraits/survivors/25-yun-jin-lee.png',
        '/assets/character-portraits/survivors/26-jill-valentine.png',
        '/assets/character-portraits/survivors/26a-claire-redfield.png',
        '/assets/character-portraits/survivors/27-leon-s-kennedy.png',
        '/assets/character-portraits/survivors/27a-chris-redfield.png',
        '/assets/character-portraits/survivors/28-mikaela-reid.png',
      ],
      selectedImage: ''
    }
  },
  methods: {
    rndSurv() {
      const idx = Math.floor(Math.random() * this.images.length)
      this.selectedImage = this.images[idx]
    }
  },
}
</script>

<style scoped>
h3 {
  color: white;
}

img {
  color: white;
}
</style>