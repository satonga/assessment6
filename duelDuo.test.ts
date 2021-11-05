
import { Builder, Capabilities, By } from "selenium-webdriver"
import { titleContains } from "selenium-webdriver/lib/until"
import { skipPartiallyEmittedExpressions } from "typescript"

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

test('Draw button diplays choices', async () => {
    const drawBtn = await driver.findElement(By.id('draw'))
    const displayed = await drawBtn.isDisplayed()
    expect(displayed).toEqual(true)
})

test('Removed from duo returns bot to choices', async () => {
    const draw = await driver.findElement(By.id('draw'))
    await draw.isDisplayed()
    const addBtn = await driver.findElement(By.xpath('..//div/button[text()="Add to Duo"]'))
    await addBtn.isDisplayed()
    const removeBtn = await driver.findElement(By.xpath('..//div/button[text()="Remove from Duo"]'))
    await removeBtn.isDisplayed()
    const returned = await driver.findElement(By.id('player-duo'))
    await returned.isDisplayed()
    expect(returned).toBe(true)
})
