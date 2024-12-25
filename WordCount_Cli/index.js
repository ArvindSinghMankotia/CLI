const fs = require("fs");
const { Command } = require("commander")
const program = new Command();

program
    .name("Arind Cli")
    .description("New to here")
    .version("1.0.0")

program
    .command("count_words")
    .description("count words in a file")
    .argument('<file_name>', 'file name')
    .action((file_name) => {
        fs.readFile(file_name, "utf-8", (err, data) => {
            if (err) {
                console.log("the cant be read");
            }
            else {
                console.log(data);
                
                data = data.trim().split('');
                let count = 0 ;
                data.forEach(element => {
                    count++;
                });
                console.log(count);
                
            }
        })
    });

program.parse(process.argv);


// node index.js help a.txt 