const fs = require('fs-extra');
const chalk = require('chalk');
const log = console.log;

const paths = {
  source: './bower_components/font-awesome/css/font-awesome.css',
  template: './polymer-font-awesome.html.template',
  output: './polymer-font-awesome.html',
  fonts: './bower_components/font-awesome/fonts'
};

const build = async () => {
  log(chalk.bold('Starting build...'));

  let source;
  let template;

  try {
    source = await fs.readFile(paths.source, 'utf8');
  } catch (err) {
    throw new Error(`Could not read source path "${paths.source}"`);
  }

  try {
    template = await fs.readFile(paths.template, 'utf8');
  } catch (err) {
    throw new Error(`Could not read template path "${paths.template}"`);
  }

  const contents = template.replace('<!-- FA -->',
    source.replace(/\.\.\/fonts/g, './fonts'));
  const destPath = paths.output.replace(/\.template$/, '');

  try {
    await fs.writeFile(paths.output, contents, 'utf8');
    await fs.copy(paths.fonts, './fonts');
  } catch (err) {
    throw new Error(`Could not write output to "${paths.output}"`);
  }
};

build()
  .then(() => console.log(chalk.bold(`Output written to: ${paths.output}`)))
  .catch((err) => console.error(chalk.red(err)));
