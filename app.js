const yargs = require("yargs");
const apis = require("./apis");

yargs.version("1.0.0");

yargs.command({
  command: "add",
  describe: "Create a new note",
  builder: {
    title: {
      describe: "Title",
      demandOption: true,
      type: "string"
    },
    content: {
      describe: "Content of note",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    apis.createNote(argv.title, argv.content);
  }
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    apis.removeNote(argv.title);
  }
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler: argv => {
    apis.listNotes();
  }
});

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title",
      demandOption: true,
      type: "string"
    }
  },
  handler: argv => {
    apis.readNote(argv.title);
  }
});

yargs.parse();
