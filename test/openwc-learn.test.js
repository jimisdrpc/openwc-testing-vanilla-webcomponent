import { html, fixture, expect } from "../node_modules/@open-wc/testing";

import "../src/openwc-learn.js";

describe("<openwc-learn>", () => {
  it("has a default property heading", async () => {
    const el = await fixture("<openwc-learn></openwc-learn>");

    expect(el.heading).to.equal("Hello world!");
  });

  it("allows property heading to be overwritten", async () => {
    const el = await fixture(html`
      <openwc-learn heading="different heading"></openwc-learn>
    `);

    expect(el.heading).to.equal("different heading");
  });
});
