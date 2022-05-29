// nexss-compiler: deno
// Deno runtime default.js for Nexss Programmer 2.x

const buf = new Uint8Array(4096); // Adjust to your needs

const n = await Deno.stdin.read(buf);
if (n == Deno.EOF) {
  console.log("No Input");
} else {
  const NexssStdin = new TextDecoder().decode(buf.subarray(0, n));
  let NexssStdout = JSON.parse(NexssStdin.toString());

  NexssStdout.test = `test`;

  console.log(JSON.stringify(NexssStdout));
}
