function Plots(input)
//Use the D3 library to read in samples.json//
d3.json("sample.json").then((samples_data)) => {
    // Define variables
    var Subjects = samples_data.samples;
    var ids = Subjects.filter(otu => otu.id == input);
}