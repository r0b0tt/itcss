#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const argv = require('yargs').argv;

function createDirectories() {
    /**
     * Create ITCSS directories.
     */
    fs.mkdir('settings', function () {
        console.log(chalk.bgGreen("Created the settings folder."));
    });
    fs.mkdir('tools', function () {
        console.log(chalk.bgGreen("Created the tools folder."));
    });
    fs.mkdir('generic', function () {
        console.log(chalk.bgGreen("Created the generic folder."));
    });
    fs.mkdir('elements', function () {
        console.log(chalk.bgGreen("Created the elements folder."));
    });
    fs.mkdir('objects', function () {
        console.log(chalk.bgGreen("Created the objects folder."));
    });
    fs.mkdir('components', function () {
        console.log(chalk.bgGreen("Created the components folder."));
    });
    fs.mkdir('utilities', function () {
        console.log(chalk.bgGreen("Created the utilities folder."));
    });
}

function createFiles() {
    /**
     * Create the base files for the ITCSS directories.
     */
    fs.open('settings/_settings.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log(chalk.green('Created settings/_settings.scss file'));
    });
    fs.open('tools/_tools.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log(chalk.green('Created tools/_tools.scss file'));
    });
    fs.open('generic/_generic.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log(chalk.green('Created generic/_generic.scss file'));
    });
    fs.open('elements/_elements.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log(chalk.green('Created elements/_elements.scss file'));
    });
    fs.open('objects/_objects.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log(chalk.green('Created objects/_objects.scss file'));
    });
    fs.open('components/_components.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log(chalk.green('Created components/_components.scss file'));
    });
    fs.open('utilities/_utilities.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log(chalk.green('Created utilities/_utilities.scss file'));
    });
}
if (argv.file) {

    let file_name = argv.file;
    let file_extension = file_name.split('.').pop();
    if (file_extension === 'scss'){

        exports.createDirectories = createDirectories();
        exports.createFiles = createFiles();

        fs.writeFile(argv.file,
            "@import 'settings/settings';\n" +
            "@import 'tools/tools';\n" +
            "@import 'generic/generic';\n" +
            "@import 'elements/elements';\n" +
            "@import 'objects/objects';\n" +
            "@import 'components/components';\n" +
            "@import 'utilities/utilities';\n",
            function (err, file) {
                if (err) throw err;
                console.log(chalk.green('Created ' + argv.file + ' file.'));
            });
    } else if(file_extension === 'sass'){
        exports.createDirectories = createDirectories();
        exports.createFiles = createFiles();

        fs.writeFile(argv.file,
            "@import 'settings/settings'\n" +
            "@import 'tools/tools'\n" +
            "@import 'generic/generic'\n" +
            "@import 'elements/elements'\n" +
            "@import 'objects/objects'\n" +
            "@import 'components/components'\n" +
            "@import 'utilities/utilities'\n",
            function (err, file) {
                if (err) throw err;
                console.log(chalk.green('Created' + argv.file + ' file'));
            });
    } else{
        throw (chalk.red('Incompatible file type. Use either .scss or .sass file extension.'));
    }
} else{
    exports.createDirectories = createDirectories();
    exports.createFiles = createFiles();
}

console.log(chalk.bold("Thank You for using @r0b0t/itcss.\n"));

