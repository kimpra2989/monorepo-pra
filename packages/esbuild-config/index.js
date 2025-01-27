const { context } = require("esbuild");

const run = ({ entryPoints = ["src/index.ts"], pkg, config = {} }) => {
  const args = process.argv.slice(2);

  const dev = args.includes("--dev");
  const minify = !dev;
  const watch = args.includes("--watch");

  const external = Object.keys({
    ...pkg.dependencies,
    ...pkg.peerDependencies,
  });

  const baseConfig = {
    entryPoints,
    bundle: true,
    minify,
    sourcemap: true,
    outdir: "dist",
    target: "es2019",
    external,
    ...config,
  };

  async function build() {
    try {
      const ctxs = await Promise.all([
        context({
          ...baseConfig,
          format: "esm",
        }),
        context({
          ...baseConfig,
          format: "cjs",
          outExtension: {
            ".js": ".cjs",
          },
        }),
      ]);

      if (watch) {
        await Promise.all(ctxs.map((ctx) => ctx.watch()));
        console.log("watching");
        return;
      }

      await Promise.all(
        ctxs.map(async (ctx) => {
          await ctx.rebuild();
          ctx.dispose();
        }),
      );
      console.log("build success");
    } catch (e) {
      console.error("Build failed", e);
      process.exit(1);
    }
  }

  build();
};

module.exports = run;
