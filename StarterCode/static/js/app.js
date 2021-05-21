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

        var ids = otus.map(d => "OTU " + d)

        console.log("OTU IDS: ${ids}")

        var labels = sample.otu_labels.slice(0,10);

        console.log("Sample Values: ${values}")
        console.log("id values: ${otus}")

        var trace = {
            x: values,
            y: ids,
            text: labels,
            tye: "bar",
            orientation: "h",
        };

        var data = [trace];

        var layout = {
            title: "Top 10 operational taxonomic units (OTUs)",
            yaxis:{
                tickmode: "linear",
            },
            margin: {
                l: 50,
                r: 50,
                t: 20,
                b: 10
            }
        }
    });
}