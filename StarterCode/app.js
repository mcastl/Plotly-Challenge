function Plots(input)
//Use the D3 library to read in samples.json//
d3.json("sample.json").then((samples_data)) => {
    // Define variables
    var Subjects = samples_data.samples;
    var ids = Subjects.filter(otu => otu.id == input);
    // Use `sample_values` as the values for the bar chart.
    var otu_values = ids[0].sample_values;
    // Use `otu:ids` as the values for the bar chart.
    var otu_ids = ids[0].otu.ids;
    // Use `otu:labels` as the values for the bar chart.
    var otu_labels = ids [0].otu_labels;
    // define labels for otu ids
    var yValues = otu_ids.slice(0,10).map(otu => "OTU " + otu).reverse()
    //define traces and filters for top 10 values
    var Traces = {
        
    }
}   
