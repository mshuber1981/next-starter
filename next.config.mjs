import { repoName } from "./config.mjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // https://github.com/tschaub/gh-pages?tab=readme-ov-file#github-pages-project-sites
  basePath: repoName === "" ? "" : `/${repoName}`,
};

export default nextConfig;
