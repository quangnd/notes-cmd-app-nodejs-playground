const checkEmpty = (val, message) => {
  if (val.length) {
    return true;
  }
  return message;
};

const addQuestions = [
  {
    type: "input",
    name: "title",
    message: "Enter new title ...",
    validate: function(value) {
      if (value.length) {
        return true;
      }
      return "Please enter the title!";
    }
  },
  {
    type: "input",
    name: "content",
    message: "Enter new content ...",
    validate: function(value) {
      if (value.length) {
        return true;
      }
      return "Please enter the content!";
    }
  }
];

const removeQuestions = [
  {
    type: "input",
    name: "title",
    message: "Enter title to remove ...",
    validate: function(value) {
      if (value.length) {
        return true;
      }
      return "Please enter the title!";
    }
  }
];

const readQuestions = [
  {
    type: "input",
    name: "title",
    message: function(value) {
      if (value.length) {
        return true;
      }
      return "Please enter the title!";
    }
  }
];

const mainUI = [
  {
    type: "list",
    choices: ["Add a note", "Read a note", "Remove a note", "List"],
    name: "actionType",
    message: "Please choose an action: "
  }
];

module.exports = {
  removeQuestions,
  readQuestions,
  addQuestions,
  mainUI
};
