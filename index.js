#! /usr/bin/env node

/**
 * Module dependencies.
 */

var program = require('commander');
const pkg = require('./package.json');

/**
 * Utilities.
 */

if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined'
            ? args[number]
            : match
        ;
        });
    };
}

function formatQuote(content, title) {
    return "\n{0}\n -- {1}\n".format(content, title);
}

/**
 * Commander.
 */

program
    .version(pkg.version)
    .option('-c, --custom [name]', 'Use custom quotes')
    .option('-w, --wikiquote [name]', 'Use wikiquote quotes')
    .parse(process.argv);

if (program.custom) {
    displayCustomQuotes(program.custom);
} else if (program.wikiquote) {
    displayWikiquoteQuotes(program.wikiquote);
} else {
    console.log("Command not available.");
}

function displayCustomQuotes(customFileName) {
    customFolderPath = process.env.QUOTEY_CUSTOM_FOLDER;
    customFilePath = "{0}/{1}".format(customFolderPath, customFileName);
    const collection = require(customFilePath);
    var quote = collection.quotes[Math.floor(Math.random()*collection.quotes.length)];
    var display = formatQuote(quote.content, quote.title);
    console.log(display);
}

function displayWikiquoteQuotes(personName) {
    const wikiquote = require('wikiquote');

    var page = wikiquote.searchPeople(personName);
    var quote = page.then(function(page) {
        return wikiquote.getRandomQuote(page.title);
    });
    
    return Promise.all([page, quote]).then(function(results) {
        var title = results[0].title
        var content = results[1]
        var display = formatQuote(content, title);
        console.log(display);
    });
}