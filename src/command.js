let program = require("commander");

program.version("1.0.0", "-v, --version");

program
  .command("add <dir>") //, "添加一个目录")
  .action(function(dir, cmd) {
    console.log(dir);
  });

program
  .command("rm <dir>")
  .option("-r, --recursive", "递归删除子目录")
  .action(function(dir, cmd) {
    console.log(dir, cmd.recursive);
  });

program.command("rename <dir> <newdir>").action(function(dir, newdir) {
  console.log(dir, newdir);
});

program.parse(process.argv);
