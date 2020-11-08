#!/usr/bin/env node

const yargs = require('yargs');
const git = require('simple-git')
const Data = require('./data')
// const simpleGit = require('simple-git');

// const options = {
//   baseDir: process.cwd(),
//   binary: 'git',
//   maxConcurrentProcesses: 6,
// };
// const git = simpleGit(options);

const argv = yargs
  .command('app', 'app', {
    type: {
        description: 'the app type',
        alias: 't',
        type: 'string',
    }
  })
  // .option('time', {
  //   alias: 't',
  //   description: 'Tell the present Time',
  //   type: 'boolean',
  // })
  .help()
  .alias('help', 'h')
  .argv;
try {
  const data = new Data();

  if(argv._.includes('app')) {
    if(argv.type) {
      const type = data.getProjectType(argv.type);
      console.log(`Fetching boilerplate for ${type.src}`);
    }else {
      throw "Provide app type, e.g., express, android, springboot ... "
    }
  }
} catch (error) {
  console.log(`Error: ${error}`);
}

