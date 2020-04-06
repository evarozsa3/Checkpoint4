export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.temp = Math.floor(1.8 * (this.kelvin - 273) + 32)
  }

  get weatherTemplate() {
    return `
    <span>${this.temp}°</span>
    	<img
				src="https://lh3.googleusercontent.com/proxy/7AM5-QLV8iLcDyPQC1ba62tWtqZ2LnFeqRDB8GyMhq7WshhjkGi4-ePQ9Nvzd_VUM9V1RmmpccUClmfqlTGH7-ZtuPCU2ACQLaBexChd5d0co3wHKI00PSQYc_4sc--QpZ3i2USvM7z9M6tmw2_PFBR-jQ"
				class="w-img" alt="">
    <span>${this.city}</span>
    `
  }
}