const yargs = require("yargs")
const { addNotes, listNotes, removeNotes } = require("../utils/notes")

const command = process.argv[2]

if (command === "add") {
    console.log("adding a note")
    addNotes(yargs.argv.note)
} else if (command == "remove") {
    console.log("removing note")
    removeNotes(yargs.argv.note)
} else if (command == "list") {
    console.log("listing all notes")
    listNotes(yargs.argv.note)
} else {
    console.log("command not recognised")
}
