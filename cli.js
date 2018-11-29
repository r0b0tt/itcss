#!/usr/bin/env node

const fs = require('fs');

function createDirectories() {
    /**
     * Create ITCSS directories.
     */
    fs.mkdir('settings', function () {
        console.log("Created the settings folder.");
    });
    fs.mkdir('tools', function () {
        console.log("Created the tools folder.");
    });
    fs.mkdir('generic', function () {
        console.log("Created the generic folder.");
    });
    fs.mkdir('elements', function () {
        console.log("Created the elements folder.");
    });
    fs.mkdir('objects', function () {
        console.log("Created the objects folder.");
    });
    fs.mkdir('components', function () {
        console.log("Created the components folder.");
    });
    fs.mkdir('utilities', function () {
        console.log("Created the utilities folder.");
    });
}

function createFiles() {
    /**
     * Create the base files for the ITCSS directories.
     */
    fs.open('settings/_settings.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log('Created settings/_settings.scss file');
    });
    fs.open('tools/_tools.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log('Created tools/_tools.scss file');
    });
    fs.open('generic/_generic.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log('Created generic/_generic.scss file');
    });
    fs.open('elements/_elements.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log('Created elements/_elements.scss file');
    });
    fs.open('objects/_objects.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log('Created objects/_objects.scss file');
    });
    fs.open('components/_components.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log('Created components/_components.scss file');
    });
    fs.open('utilities/_utilities.scss', 'w', function (err, file) {
        if (err) throw err;
        console.log('Created utilities/_utilities.scss file');
    });
}

createDirectories();
createFiles();

exports.createDirectories = createDirectories();
exports.createFiles = createFiles();

