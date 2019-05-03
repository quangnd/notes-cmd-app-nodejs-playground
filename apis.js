const fs = require("fs");
const chalk = require("chalk");

const createNote = (title, content) => {
  const notes = loadNotes();
  let note = { title, content };
  let duplicateNotes = notes.filter(n => n.title === title);

  if (duplicateNotes.length > 0) {
    console.log(chalk.red("Title was existed! Please choose another one..."));
    return;
  }

  notes.push(note);
  console.log(chalk.green("Saved new note"));
  saveToFile(notes);
};

const removeNote = title => {
  const notes = loadNotes();
  let notesToKeep = notes.filter(n => n.title !== title);

  if (notes.length <= notesToKeep.length) {
    console.log(chalk.red("There is no note to remove"));
    return;
  }

  console.log(chalk.green("Note removed!!!"));
  saveToFile(notesToKeep);
};

const listNotes = () => {
  const notes = loadNotes();

  if (!notes.length) {
    console.log(chalk.red("You have no node now. Please create one first!"));
    return;
  }

  console.log(chalk.yellow("Your nodes:"));
  notes.forEach((n, index) => {
    console.log(
      chalk.green(`${index + 1}. Title: ${n.title}, Content: ${n.content}`)
    );
  });
};

const readNote = title => {
  const notes = loadNotes();
  let currentNotes = notes.filter(n => n.title === title);

  if (!currentNotes.length) {
    console.log(chalk.red("No note found!!!"));
    return;
  }

  console.log(
    chalk.green(
      `Current note has title: ${title} and content: ${currentNotes[0].content}`
    )
  );
};

const loadNotes = () => {
  try {
    let notes = fs.readFileSync("data.json", "utf8");
    return JSON.parse(notes);
  } catch (e) {
    // console.log(e);
    return [];
  }
};

const saveToFile = notes => {
  try {
    fs.writeFileSync("data.json", JSON.stringify(notes));
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  createNote,
  removeNote,
  listNotes,
  readNote
};
