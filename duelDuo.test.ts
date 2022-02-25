
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

it('should display choices div when draw is clicked', async ()=>{
    await driver.sleep(750)
    await driver.findElement(By.css('#draw')).click()
    const findChoices = await driver.findElement(By.css('#choices'))
    await driver.sleep(750)
    expect(findChoices.getAttribute('class')).not.toContain('hide')
})

it('Should show players duo after clicking add to duo',async ()=>{
    await driver.findElement(By.css('#draw')).click()
    await driver.sleep(1500)
    const botBtn = await driver.findElement(By.css('.bot-btn'))
    await botBtn.click()
    const findPlayerDuo = await driver.findElement(By.css('#player-duo'))
    expect(findPlayerDuo.getAttribute('class')).not.toContain('hide')
})

