const apis = require("./apis");
const program = require("commander");

// Build UI
// Craft questions to present to users
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter title ..."
  },
  {
    type: "input",
    name: "content",
    message: "Enter content ..."
  }
];

program.version("0.0.1").description("Node management app");

program
  .command("add <title> <content>")
  .alias("a")
  .description("Add a note")
  .action((title, content) => {
    apis.createNote(title, content);
  });

program
  .command("remove <title>")
  .alias("r")
  .description("Remove a note")
  .action(title => {
    apis.removeNote(title);
  });

program
  .command("list")
  .alias("r")
  .description("List notes")
  .action(() => {
    apis.listNotes();
  });

program
  .command("read <title>")
  .alias("r")
  .description("Read a note by title")
  .action(title => {
    apis.readNote(title);
  });

program.parse(process.argv);
