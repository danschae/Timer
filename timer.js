const args = process.argv.slice(2);
const timer = input => {
  let filtered = input.filter(number => number > 0 ? number : delete number);
  let mapped = filtered.map(number => number * 1000)
  for (const interval of mapped) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, interval);
  }
}

timer(args)