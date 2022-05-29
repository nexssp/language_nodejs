# NodeJS for Nexss Programmer 2.x

To Install Nexss Programmer please go to [Nexss Programmer CLI](https://github.com/nexssp/cli#readme) for more information.
You can also find some R&D on wiki pages: <https://github.com/nexssp/language_nodejs/wiki>

## Templates

Each language in the Nexss Programmer has predefined templates which can be used easy by adding file `nexss file add myprogram.js` then the templates is displayed. You can search the template list just by typing after add file command.

![Example of template display](nexssProgrammer-SelectTemplateExampleCLI.png)

## Tutorials

### Learn Any Programming Language Templates

Enter command 'nexss file add myfile.js'
and type learn for finding templates which starts with 'learn' keyword. [Picture above]

## JavaScript Runtimes

- Node.js - <https://nodejs.org/en/>
- Deno - <https://deno.land>

## To change runtimes/compilers

```sh
nexss js default compiler # displays all available runtimes/compilers
nexss js default compiler deno # to set the Deno compiler
nexss js default compiler node # to set the Node.js compiler
nexss js default compiler unset # to reset to defaults (Node.js)

nexss js default compiler --nocache # use --nocache if you have changed configuration files manually

nexss f a my.js --compiler=deno --nocache
```

OR put at the top of your file/program. If will install compiler on 'nexss yourprogram.js'

```js
// nexss-compiler: deno

console.log(`Hello from Deno! ${Deno.version.deno}`);
```
