describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com')
    })
  
    it('should display "google" text on page', async () => {
      await expect(page).toMatch('google')
    })
})

describe('AWS is up and running.', () => {
    beforeAll(async () => {
      await page.goto('https://status.aws.amazon.com/')
    })
  
    it('should display "Service is operating normally" text on page', async () => {
      await expect(page).toMatch('Service is operating normally')
    })
})