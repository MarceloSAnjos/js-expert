class Network {
  constructor({ host }) {
    this.host = host;
  }

  parseManifestUrl({ url, fileResolution, fileResolutionTag, hostTag }) {
    console.log("hostTag", this.host);
    return url
      .replace(fileResolutionTag, fileResolution)
      .replace(hostTag, this.host);
  }

  async fetchFile(url) {
    const response = await fetch(url);
    return response.arrayBuffer();
  }
}
