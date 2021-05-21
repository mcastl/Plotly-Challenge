//Use the D3 library to read in samples.json//
function getPlot(id) {
    d3.json("data/sample.json").then((data)=>{
        console.log(data)
        var wfreq = data.metada.map(d => d.wfreq)
        console.log("Washing Frequency: ${wfreq}")

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.//
var sample = data.sample.filter(s => s.id.toString() === id)[0];
console.log(sample);

var values = sample.sample_values.slice(0,10).reverse();
var otus = (sample.otu_ids.slice(0,10)).reverse();


    });
}

