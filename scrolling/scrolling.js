const chalk = require("chalk")
const blockChar = "█"
const digits = process.argv[2]!=undefined ? BigInt(process.argv[2]) : 20000n

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function generatePi() {
  let i = 1n;
  let x = 3n * (10n ** (20n + digits));
  let pi = x;
  while (x > 0) {
    x = x * i / ((i + 1n) * 4n);
    pi += x / (i + 2n);
    i += 2n;
  }
  return pi / (10n ** 20n);
}

async function print(str,ms) {
  ms = ms || 10
  for (var i = 0; i < str.length; i++) {
    var stringChar = str.charAt(i)
    await sleep(ms)
    process.stdout.write(stringChar)
  }
}

async function printPi(pi,ms) {
  pi = String(pi)
  for (var i = 0; i < pi.length; i++) {
    var piChar = pi.charAt(i)
    var newPiChar = piChar
    switch(piChar) {
      case "0":
        newPiChar = chalk.redBright(blockChar)
        break;
      case "1":
        newPiChar = chalk.red(blockChar)
        break;
      case "2":
        newPiChar = chalk.blue(blockChar)
        break;
      case "3":
        newPiChar = chalk.green(blockChar)
        break;
      case "4":
        newPiChar = chalk.magenta(blockChar)
        break;
      case "5":
        newPiChar = chalk.yellow(blockChar)
        break;
      case "6":
        newPiChar = chalk.cyan(blockChar)
        break;
      case "7":
        newPiChar = chalk.grey(blockChar)
        break;
      case "8":
        newPiChar = " "
        break;
      case "9":
        newPiChar = chalk.greenBright(blockChar)
        break;
    }
    await sleep(ms)
    process.stdout.write(newPiChar)
    process.stdout.write(newPiChar)
  }
}

async function main() {
  await print("--------------------------- HAPPY PI DAY ---------------------------\n",10)
  await print("Generating PI Digits...", 100)
  var pi = generatePi()
  await print("Done!\n", 100)
  await print("For pi day, let's visualise some digits of pi!\n",100)
  await print("0......."+chalk.redBright("REDBRIGHT\n"))
  await print("1............."+chalk.red("RED\n"))
  await print("2............"+chalk.blue("BLUE\n"))
  await print("3..........."+chalk.green("GREEN\n"))
  await print("4........."+chalk.magenta("MAGENTA\n"))
  await print("5.........."+chalk.yellow("YELLOW\n"))
  await print("6............"+chalk.cyan("CYAN\n"))
  await print("7............"+chalk.grey("GREY\n"))
  await print("8..........."+chalk.black("BLACK\n"))
  await print("9....."+chalk.greenBright("GREENBRIGHT\n"))
  await print("\n\n\n3..2..1..\n\n",300)
  await printPi(pi, 1)
  await print("\n\n\n-- ThatCreeper", 100)
  await sleep(4000)
}
main()





