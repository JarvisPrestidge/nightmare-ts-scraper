/// <reference path="nightmare.d.ts" />

import * as Nightmare from "nightmare";

const BASE_URL: string = "https://www.whoscored.com"

const scrape = async () => {

  console.log("Starting season scrape")

  // Create visible nightmare instance
  const nightmare = new Nightmare({
    show: true
  })

  // Go to seasons page
  try {
    await nightmare
      .goto(BASE_URL)
      .wait('div#domestic-index > dd:nth-child(5) > a.option.selected:nth-child(1)')
      .click('div#domestic-index > dd:nth-child(5) > a.option.selected:nth-child(1)')
      .wait(5000)
      .end()
  } catch (e) {
    console.log(e)
  }
}

scrape()

