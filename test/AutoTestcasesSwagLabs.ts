import "@babel/polyfill";
import chrome from "selenium-webdriver/chrome";
import { Builder, By, Key, Capabilities } from "selenium-webdriver";
import assert from "assert";
import { path } from "chromedriver";
let driver = null;
const chromeOptions = new chrome.Options().headless();
const URL = "https://www.saucedemo.com/";

describe("Selenium", () => {
  beforeEach(async () => {
    driver = await new Builder(path)
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();
    await driver.get(URL);
  });

  afterEach(async () => {
    await driver.quit();
  });

  it("should be able to login to the application successfully", async () => {
    
    //entering user name
    const username = await driver.findElement(By.id("user-name"));
    await element.sendKeys("standard_user", Key.RETURN);

    //entering password
    const password = await driver.findElement(By.id("password"));
    await element.sendKeys("secret_sauce", Key.RETURN);

    //login to website
    const loginButton = await driver.findElement(By.id("login-button"));
    await loginButton.click();


    const res = await driver.findElement(By.id("shopping_cart_container"))
    assert.notEqual(shoppingCartIcon, null);
  });



  it("Should be able to select 'Sauce Labs Backpack' to shopping bag", async () => {
      // adding Sauce labs backpack to the shopping bag
      var productname = "sauce-labs-backpack"
      const addToCartButton = await driver.findElement(By.id("add-to-cart-${productname}"));
      await addToCartButton.click();
    });
    

  });
      it("Should be able to verify the product added to the bag", async () => {
        //Navigating to shopping bag
        const cartButton = await driver.findElement(By.id("shopping_cart_container"));
        await cartButton.click();
      
        //Checking if the sauce labs backpack is added to the shopping bag
        const productInCart = await driver.findElement(By.xpath("//div[@class='inventory_item_name' and text()='Sauce Labs Backpack']"));
        assert.notEqual(productInCart, null);
      });
      
    

  it("should be able to checkout item successfully", async () => {
    
    // Navigate to shopping bag
  const cartButton = await driver.findElement(By.id("shopping_cart_container"));
  await cartButton.click();

   // checkout process
   const checkoutButton = await driver.findElement(By.id("checkout"));
   await checkoutButton.click();
 
   // firstname
   const firstNameInput = await driver.findElement(By.id("first-name"));
   var fname = "Praneeth";
   await firstNameInput.sendKeys(${fname});
    //lastname
   const lastNameInput = await driver.findElement(By.id("last-name"));
   var lname = "Cheeday"
   await lastNameInput.sendKeys(${lname});
    //postalcode
   const zipCodeInput = await driver.findElement(By.id("postal-code"));
   var pcode = "534199"
   await zipCodeInput.sendKeys(${pcode});
 
   //clickingcontinue
   const continueButton = await driver.findElement(By.id("continue"));
   await continueButton.click();

   //clickingfinish
   const finishButton = await driver.findElement(By.id("finish"));
   await finishButton.click();
 
    // Check for a success message or confirmation element.
  const confirmationMessage = await driver.findElement(By.xpath("//div[contains(text(), 'Thank you for your order')]"));

  // checking confirmation message is present to confirm a successful checkout.
  assert.ok(confirmationMessage, "Checkout was not successful. Confirmation message not found.");
 });


  it("should be able to logout successfully", async () => {
    // Find and click the menu button to access the menu.
  const menuButton = await driver.findElement(By.id("react-burger-menu-btn"));
  await menuButton.click();

  // logout
  const logoutLink = await driver.findElement(By.id("logout_sidebar_link"));
  await logoutLink.click();

  //current url
  const currentURL = await driver.getCurrentUrl();

  // expected url.
  const expectedURL = "https://www.saucedemo.com/";

  // checking
  assert.strictEqual(currentURL, expectedURL, "Logout was not successful. URL did not match the expected login URL.");

  });
