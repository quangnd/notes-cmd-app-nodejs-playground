const program = require("commander");
const { prompt } = require("inquirer");
const apis = require("./apis");
const {
  readQuestions,
  addQuestions,
  removeQuestions,
  mainUI
} = require("./buildUI");

program.version("0.0.1").description("Note management app");

// Build UI
// Craft questions to present to users if only run `node app`
if (!process.argv[2]) {
  prompt(mainUI).then(answers => {
    switch (answers.actionType) {
      case "Add a note":
        addNote();
        break;
      case "Read a note":
        readNote();
        break;
      case "Remove a note":
        removeNote();
        break;
      case "List":
        listNotes();
        break;
      default:
        break;
    }
  });
}

const addNote = () => {
  prompt(addQuestions).then(answer => {
    apis.createNote(answer.title, answer.content);
  });
};

const removeNote = () => {
  prompt(removeQuestions).then(answer => {
    apis.removeNote(answer.title);
  });
};

const readNote = () => {
  prompt(readQuestions).then(answer => {
    apis.readNote(answer.title);
  });
};

const listNotes = () => {
  apis.listNotes();
};

// For direct commands like: node app add "title" "content"
program
  .command("add")
  .alias("a")
  .description("Add a note")
  .action(() => {
    addNote();
  });

program
  .command("remove")
  .alias("r")
  .description("Remove a note")
  .action(() => {
    removeNote();
  });

program
  .command("list")
  .alias("r")
  .description("List notes")
  .action(() => {
    listNotes();
  });

program
  .command("read")
  .alias("re")
  .description("Read a note by title")
  .action(() => {
    readNote();
  });

program.parse(process.argv);
