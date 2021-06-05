function Plots(input){
//Use the D3 library to read in samples.json//
    d3.json("samples.json").then((samples_data) => {
        // Define variables
        var Subjects = samples_data.samples;
        var ids = Subjects.filter(otu => otu.id == input);
        // Use `sample_values` as the values for the bar chart.
        var otu_values = ids[0].sample_values;
        // Use `otu:ids` as the values for the bar chart.
        var otu_ids = ids[0].otu.ids;
        // Use `otu:labels` as the values for the bar chart.
        var otu_labels = ids[0].otu_labels;
        // define labels for otu ids
        var yValues = otu_ids.slice(0,10).map(otu => "OTU " + otu).reverse()
        //define traces and filters for top 10 values
        var Traces = {
            x:otu_values.slice(0,10).reverse(),
            y: yValues,
            text: otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h"
        };

        var layout = {
            margin: {
                t:10
            }
        }
        var data = [Traces];
        // Create horizontal var chart
        Plotly.newPlot("bar", data, layout);

        // Create a bubble chart that displays each sample
        var BubblePlot = {
            // Ue otu_ids for the x values
            x: otu_ids,
            // Use sample_values for the y values
            y: otu_values,
            // Use Sample_values for the marker size
            text: otu_labels,
            mode: "markers",
            marker: {
                size:otu_values,
                color:otu_ids,
                colorscale: "Earth"
            }
        }

        var Layoutb = {
            margin: {
                t:10  
            },
            hovermode: "closest",
            xaxis: {
                title: "OTU ID"
            }
        }
        Plotly.newPlot("bubble", BubblePlot, Layoutb)
    });
};

// function to change the visualizations based on the selected id
function optionChanged(userInput){
    Plots(userInput);
    var panelBody = d3.select(".panel-body");
    panelBody.html("");
    demoInfo(userInput);
};
// Display the samples metadata
defaultfunction();
function demoInfo(idInput) {
    d3.json("samples.json").then((samples_data) => {
        var metadata = samples_data.metadata;
        var ids = metadata.filter(otu => otu.id == idInput);
        var ResultId = ids[0];
        htmlEntry = d3.select("#sample-metadata");
        Object.entries(ResultId).forEach(([key, value]) => {
            htmlEntry.append("p").text(`${key}:${value}`)
            });
        });
    };
// update all the plots any time that a new sample is selected
function defaultfunction() {
    d3.json("samples.json").then((data)=>{
        var names = data.names;
        names.forEach((name => {
            d3.select("#selDataset").append("option").tect(name).property("value", name);
            });
        Plots(data.names[0]);
        demoInfo(data.names[0]);
    });
};
