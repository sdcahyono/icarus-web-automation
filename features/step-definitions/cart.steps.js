const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser, expect, $ } = require('@wdio/globals')

const CartPage = require('../pageobjects/cart.page');
const SecurePage = require('../pageobjects/secure.page');
const HomePage = require('../pageobjects/home.page');
const PlpPage = require('../pageobjects/plp.page');
const WishlistPage = require('../pageobjects/wishlist.page');
const PdpPage = require('../pageobjects/pdp.page');

const pages = {
    cart: CartPage
}

Then(/^Shopping cart page should available$/, async () => {
    await expect(CartPage.headerShoppingCart).toBeDisplayed();
    await browser.pause(1000);
    await expect(CartPage.subtotalOnCart).toBeDisplayed();
    const cartSubtotal = await CartPage.subtotalOnCart.getText();
    // cartSubtotal.then((text) => {
    numericValueCartSubtotal = parseInt(cartSubtotal.replace(/[^\d]/g, ''), 10);
    console.log(numericValueCartSubtotal); // Output: 1297000
    // });
//    nominal_cartSubtotal = cartSubtotal.replace(/[^\d]/g, '');
//    int_cartSubtotal = parseInt(nominal_cartSubtotal, 10);
});

// Then(/^Qty should 1$/, async () => {
// //    q = await CartPage.inputQty.getValue();
// //    await expect(q).toEqual(qty);
//     await browser.pause(1000);
//     await expect(CartPage.inputQty1).toBeDisplayed();
//     await browser.pause(1000);
// });

When(/^User click plus button$/, async () => {
    await CartPage.clickPlus();
});

// Then(/^Qty should 2$/, async () => {
//     await browser.pause(1000);
//     await expect(CartPage.inputQty2).toBeDisplayed();
//     await browser.pause(1000);
// });

When(/^User click min button$/, async () => {
    await CartPage.clickMin();
})

// When(/^User input value 2$/, async () => {
//     await CartPage.typeQty2();
// });

// When(/^User input value 3$/, async () => {
//     await CartPage.typeQty3();
// });

// When(/^User input value 1$/, async () => {
//     await CartPage.typeQty1();
// });

// When(/^User input value 11$/, async () => {
//     await CartPage.typeQty11();
// });

// Then(/^Qty should 10$/, async () => {
//     await browser.pause(1000);
//     await expect(CartPage.inputQty10).toBeDisplayed();
//     await browser.pause(2000);
// });

When(/^User click trash icon$/, async() => {
    await CartPage.clickTrashIcon();
});

When(/^User click Confirm$/, async() => {
    await CartPage.clickConfirm();
});

Then(/^Delete successful and user get message (.+)$/, async(string) => {
    await expect(CartPage.snackbarDeleteProduct).toHaveText(string);
    await browser.pause(2000);
});

Then(/^Add to wishlist successful with message (.+)$/, async(string) => {
    await expect(CartPage.snackbarDeleteProduct).toHaveText(string);
    await browser.pause(2000);
})

When(/^User click close$/, async() => {
    await CartPage.clickClose();
});

When(/^User click Pindahkan Ke Wishlist$/, async() => {
    await CartPage.clickAddToWishlist();
})

When(/^User click wishlist icon$/, async() => {
    await browser.pause(2000);
    await HomePage.clickWishlist();
});

Then(/^Product (.+) should available in wishlist$/, async (product) => {
    await expect(WishlistPage.inWishlistProductName).toHaveText(product);
    await browser.pause(2000);
});

Then(/^Product (.+) should not available in wishlist$/, async (product) => {
    await browser.pause(1000);
    await expect(WishlistPage.inWishlistProductName).waitForDisplayed({ reverse: true });
});

When(/^User click Bayar$/, async() => {
    await browser.pause(2000);
    await CartPage.clickBayar();
});

Then(/^Catalog rule price should correct$/, async() => {
    await browser.pause(1000);
    await expect(CartPage.catalogPromoTagGinger).toBeDisplayed();
    await expect(CartPage.subtotalOnCart).toBeDisplayed();
    await expect(CartPage.cartHargaAsli).toBeDisplayed();
    originalPrice = await CartPage.cartHargaAsli.getText();
    // originalPrice.then((txt) => {
    numericValueOriginalPrice = parseInt(originalPrice.replace(/[^\d]/g, ''), 10);
    // console.log(numericValueOriginalPrice);
    numericOriginalPrice = numericValueOriginalPrice;
    console.log(numericOriginalPrice);
    catalogPrice = numericOriginalPrice-20000;
    console.log(catalogPrice);
    stringCatalogPrice = "Rp " + catalogPrice.toLocaleString();
    stringCatalogPrice = stringCatalogPrice.replace(',', '.');
    expect(CartPage.cartHargaCatalog).toHaveText(stringCatalogPrice);
    // });
    // const cartSubtotal = CartPage.subtotalOnCart.getText();
    // cartSubtotal.then((text) => {
    //     numericValueCartSubtotal = parseInt(text.replace(/[^\d]/g, ''), 10);
    //     console.log(numericValueCartSubtotal); // Output: 1297000
    // });
});

Then(/^Promo should available and promo amount should correct$/, async() => {
    await expect(CartPage.labelPromoCart).toBeDisplayed();
    await expect(CartPage.promoAmountCart).toBeDisplayed();
    const cartSubtotal = await CartPage.subtotalOnCart.getText();
    // cartSubtotal.then((text) => {
    numericValueCartSubtotal = parseInt(cartSubtotal.replace(/[^\d]/g, ''), 10);
    console.log(numericValueCartSubtotal); 
    promoAmount = numericValueCartSubtotal*(15/100);
    stringPromoAmount = "-Rp " + promoAmount.toLocaleString().replace(',', '.');
    expect(CartPage.promoAmountCart).toHaveText(stringPromoAmount);
    // });
});

Then(/^Promo tagging should available$/, async() => {
    // await expect(CartPage.promoTag).toBeDisplayed();
    await expect(CartPage.cartRulePromoTagArber).toBeDisplayed();
    await expect(CartPage.cartRulePromoTagArber).toHaveText("Disc 15%");
});

Then(/^Catalog rule and cart rule subtotal should correct$/, async() => {
    await expect(CartPage.arberProduct).toBeDisplayed();
    await expect(CartPage.bananaProduct).toBeDisplayed();
    intArberPrice = 0;
    intBananaPrice = 0;
    intSubTotal = 0;
    priceArber = await CartPage.arberPrice.getText();
    // priceArber.then((arber) => {
    numericValueArberPrice = parseInt(priceArber.replace(/[^\d]/g, ''), 10);
    console.log(numericValueArberPrice);
    intArberPrice = intArberPrice+(numericValueArberPrice*2);
    // });
    priceBanana = await CartPage.bananaPrice.getText();
    // priceBanana.then((banana) => {
    numericValueBananaPrice = parseInt(priceBanana.replace(/[^\d]/g, ''), 10);
    console.log(numericValueBananaPrice);
    intBananaPrice = intBananaPrice+numericValueBananaPrice;
    // });
    await expect(CartPage.subtotalOnCart).toBeDisplayed();
    const cartSubtotalCartCat = await CartPage.subtotalOnCart.getText();
    // cartSubtotalCartCat.then((text) => {
    numericValueCartSubtotalCartCat = parseInt(cartSubtotalCartCat.replace(/[^\d]/g, ''), 10);
    console.log(numericValueCartSubtotalCartCat); 
    intSubTotal = intSubTotal+intArberPrice+intBananaPrice;
    expect(numericValueCartSubtotalCartCat).toEqual(intSubTotal);
    // });
});

Then(/^Promo catalog and cart rule should available and promo amount should correct$/, async() => {
    await expect(CartPage.cartRulePromoTagArber).toBeDisplayed();
    await expect(CartPage.cartRulePromoTagArber).toHaveText("Disc 15%");
    await expect(CartPage.cartRulePromoTagBanana).toBeDisplayed();
    await expect(CartPage.catalogRulePromoTagBanana).toBeDisplayed();
    await expect(CartPage.labelPromoCart).toBeDisplayed();
    await expect(CartPage.promoAmountCart).toBeDisplayed();
    const cartSubtotal = CartPage.subtotalOnCart.getText();
    // cartSubtotal.then((text) => {
        // numericValueCartSubtotalCatCart = parseInt(text.replace(/[^\d]/g, ''), 10);
        // console.log(numericValueCartSubtotalCatCart); 
    promoAmountCatCart = intSubTotal*(15/100);
    stringPromoAmount = "-Rp " + promoAmountCatCart.toLocaleString().replace(',', '.');
    expect(CartPage.promoAmountCart).toHaveText(stringPromoAmount);
    // });
});

Then(/^Promo cart rule should available and promo amount should correct$/, async() => {
    // await expect(CartPage.labelPromoCart).toBeDisplayed();
    // await expect(CartPage.promoAmountCart).toBeDisplayed();
    intCoolingPrice = 0;
    intDoubleEndedPrice = 0;
    intHairScrunchies = 0;
    // const divNameElements = browser.$$('.mui-style-1jfyky7 .mui-style-b95f0i .mui-style-odf8yp');
    // const divTagElements = document.querySelectorAll('.mui-style-1jfyky7 .mui-style-b95f0i .mui-style-c2j16l');
    // const divPriceElements = document.querySelectorAll('.mui-style-1jfyky7 .mui-style-b95f0i .MuiBox-root mui-style-1bfx2ni');
    // let productNames = [];
    // let promoTags = [];
    // let productPrices = [];
    // divNameElements.forEach((element) => {
    //     productNames.push(element);
    // });

    // console.log(productNames);
    // let jmlName = productNames.length;
    // let i = 1;
    // let jmlProd = 3;
    // while(i < jmlProd) {
    //     nameProduct = $("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div["+i+"]/div[1]/div[1]/a[1]/h5[1]").getText();
    //         nameProduct.then((text) => {
    //             expect(text).toEqual("COOLING CUCUMBER EYE SHEET MASK 2X6ML");
    //             console.log(text);
    //         });
    //     i++;
    // };
    // get tagPromoCucumber() { return $("//h5[text()='COOLING CUCUMBER EYE SHEET MASK 2X6ML']/parent::a/parent::div/following-sibling::div//div[contains(text(), 'Diskon 50%')])";}
    
    // promo tag diskon 50%
    // await expect("//h5[text()='COOLING CUCUMBER EYE SHEET MASK 2X6ML']/parent::a/parent::div/following-sibling::div//div[contains(text(), 'Diskon 50%')]").toBeDisplayed();
    await expect(CartPage.promoTagCoolingCucumber).toBeDisplayed();
    // await expect(CartPage.priceCoolingCucumber).toHaveText("Rp 129.000");
    let textPriceCooling = await CartPage.priceCoolingCucumber.getText();
    let priceCooling = parseInt(textPriceCooling.replace(/[^\d]/g, ''), 10);
    console.log(priceCooling);
    let promoCooling = (50/100)*priceCooling;
    // promo tag diskon 150K produk Double Ended
    await expect(CartPage.promoTagDoubleEnded).toBeDisplayed();
    let textPriceDoubleEnded = await CartPage.priceDoubleEnded.getText();
    let priceDoubleEnded = parseInt(textPriceDoubleEnded.replace(/[^\d]/g, ''), 10);
    console.log(priceDoubleEnded);
    // promo tag diskon 150K produk hair Scrunchies
    await expect(CartPage.promoTagHairScrunchies).toBeDisplayed();
    await expect(CartPage.promoTagHairScrunchies).toHaveText("Diskon 150K");
    let textPriceHairScrunchies = await CartPage.priceHairScrunchies.getText();
    let priceHairScrunchies = parseInt(textPriceHairScrunchies.replace(/[^\d]/g, ''), 10);
    console.log(priceHairScrunchies);
    subTotal = priceCooling+priceDoubleEnded+priceHairScrunchies;
    totalPromo = promoCooling+150000; 
    console.log(totalPromo);
    let textTotalPromo = "-Rp " + totalPromo.toLocaleString().replace(',', '.');
    await expect(CartPage.promoAmountCart).toHaveText(textTotalPromo);
})

//sandra
When(/^User search and add product (.+) to cart$/, async(productName) => {
    await HomePage.clickSearch();
    await PlpPage.typeSearch(productName);
    await PlpPage.clickAddToCartSearch();
    await browser.pause(1000);
    yy = parseInt(1);
    await browser.scroll(0, yy);
});

Then(/^Cart rule tag should available$/, async() => {
    await expect(CartPage.cartRulePromoTagAloe).toBeDisplayed();
    await expect(CartPage.cartRulePromoTagAloe).toHaveText("Diskon 50%");
    await expect(CartPage.cartRulePromoTagAloe15).toHaveText("Disc 15%");
    // await expect(CartPage.cartRulePromoTagArber).toBeDisplayed();
    // await expect(CartPage.cartRulePromoTagArber).toHaveText("Disc 15%");
    await expect(CartPage.cartRulePromoTagBanana).toBeDisplayed();
    // await expect(CartPage.promoTagHairScrunchies).toBeDisplayed();
    // await expect(CartPage.promoTagHairScrunchies).toHaveText("Disc 15%");
    await expect(CartPage.cartRulePromoTagBlackMusk).toBeDisplayed();
    await expect(CartPage.cartRulePromoTagBlackMusk).toHaveText("Disc 15%");
})

Then(/^Catalog rule tag should available$/, async() => {
    await expect(CartPage.catalogRulePromoTagBanana).toBeDisplayed();
})

Then(/^Catalog rule Banana price should correct$/, async() => {
    await expect(CartPage.bananaNormalPrice).toBeDisplayed();
    let textnormalPrice = await CartPage.bananaNormalPrice.getText();
    let normalPrice = parseInt(textnormalPrice.replace(/[^\d]/g, ''), 10);
    catalogBananaPrice = normalPrice - 20000;
    await expect(CartPage.bananaPrice).toHaveText("Rp " + catalogBananaPrice.toLocaleString().replace(',', '.'));
})

Then(/^Subtotal and Promo amount should correct$/, async() => {
    let textPriceAloe = await CartPage.priceAloe.getText();
    let priceAloe = parseInt(textPriceAloe.replace(/[^\d]/g, ''), 10);
    // let textPriceArber = await CartPage.arberPrice.getText();
    // let priceArber = parseInt(textPriceArber.replace(/[^\d]/g, ''), 10);
    let textPriceBanana = await CartPage.bananaPrice.getText();
    let priceBanana = parseInt(textPriceBanana.replace(/[^\d]/g, ''), 10);
    // let textPriceHairScrunchies = await CartPage.priceHairScrunchies.getText();
    // let priceHairScrunchies = parseInt(textPriceHairScrunchies.replace(/[^\d]/g, ''), 10);
    let textPriceBlackMusk = await CartPage.priceBlackMusk.getText();
    let priceBlackMusk = parseInt(textPriceBlackMusk.replace(/[^\d]/g, ''), 10);
    // valueCartSubTotal = priceAloe + priceArber + priceBanana + priceHairScrunchies;
    // valueCartSubTotal = (priceAloe*2) + priceArber + priceBanana + priceBlackMusk;
    valueCartSubTotal = (priceAloe*2) + priceBanana + priceBlackMusk;
    let textSubtotal = await CartPage.subtotalOnCart.getText();
    let subtotal = parseInt(textSubtotal.replace(/[^\d]/g, ''), 10);
    // verify subtotal;
    expect(subtotal).toEqual(valueCartSubTotal);
    let promoAloe = priceAloe*(50/100);
    let promoAloe2 = priceAloe*(15/100);
    // let promoArber = priceArber*(15/100);
    let promoBanana = priceBanana*(15/100);
    // let promoHair = priceHairScrunchies*(15/100);
    let promoBlackMusk = priceBlackMusk*(15/100);
    // totalPromo = promoAloe + promoAloe2 + promoArber + promoBanana + promoBlackMusk;
    totalPromo = promoAloe + promoAloe2 + promoBanana + promoBlackMusk;
    let textPromoAmount = "-Rp " + totalPromo.toLocaleString().replace(',', '.');
    expect(CartPage.promoAmountCart).toHaveText(textPromoAmount);
})

When(/^User click on produk$/, async() => {
    await PlpPage.clickLinkArber();
})

When(/^User click Add to Bag in PDP Arber$/, async() => {
    await PdpPage.clickPdpArberAddToBag();
})

Then(/^Add product to cart successful and user get message (.+)$/, async(string) => {
    await browser.pause(1000);
    await expect(HomePage.snackbarNotif).toHaveText(string);
    await browser.pause(2000);
    await expect(HomePage.cartBadge).toHaveText("1");
})

Then(/^Cart should contain (.+) product$/, async(qty) => {
    await expect(CartPage.cartJumlahProduk).toHaveText("Isi: "+qty+" Produk");
})

// Then(/^Product ARBER EAU DE TOILETTE 100ML should available in cart$/, async() => {
//     await expect(CartPage.arberProduct).toBeDisplayed();
//     await expect(CartPage.arberProduct).toHaveText("ARBER EAU DE TOILETTE 100ML");
// })

Then(/^Product (.+) should available in cart$/, async(ProductNameInCart) => {
    // await expect(CartPage.advanceSetProduct).toBeDisplayed();
    // await expect(CartPage.advanceSetProduct).toHaveText("ADVANCE SET");
    cartProductName = ProductNameInCart;
    await expect(CartPage.cartProductName).toBeDisplayed();
    await expect(CartPage.cartProductName).toHaveText(ProductNameInCart);
})

// Then(/^Qty should 3$/, async () => {
//     await browser.pause(1000);
//     await expect(CartPage.inputQty3).toBeDisplayed();
//     await browser.pause(1000);
// });

Then(/^Qty should (.+)$/, async(valu) => {
    await browser.pause(1500);
    await expect(CartPage.inputQty).toHaveValue(valu);
    await browser.pause(1000);
});

When(/^User input value (.+)$/, async (val) => {
    await CartPage.typeQty(val);
});

Then(/^Plus button should disabled$/, async () => {
    const button = CartPage.btnPlus;
    // button.waitForEnabled({ reverse: true });
    // await expect(button.isEnabled()).toBe(false);
    // browser.pause(100); 
    // expect(button.getAttribute('disabled')).toBe('true');
    await expect(CartPage.buttonPlus).toHaveAttr('disabled');
    // await expect(CartPage.btnPlus).toBeDisabled();
    // const isDisabled = await CartPage.buttonPlus.getAttribute('disabled');
    // expect(isDisabled).to.be.true;
})

Then(/^Label subtotal should available$/, async() => {
    await expect(CartPage.labelSubtotal).toBeDisplayed();
})

Then(/^Subtotal amount should available$/, async() => {
    await expect(CartPage.subtotalOnCart).toBeDisplayed();
    let productPriceSubtotal = await CartPage.subtotalProductPrice.getText();
    await expect(CartPage.subtotalOnCart).toHaveText(productPriceSubtotal);
})

Then(/^Label Total should available$/, async() => {
    await expect(CartPage.labelTotal).toBeDisplayed();
})

Then(/^Total amount without promo should available$/, async() => {
    await expect(CartPage.cartTotalAmount).toBeDisplayed();
    let cartSubtotal = await CartPage.subtotalOnCart.getText();
    await expect(CartPage.cartTotalAmount).toHaveText(cartSubtotal);
})

Then(/^Total amount with promo should available$/, async() => {
    const cartSubtotal = await CartPage.subtotalOnCart.getText();
    let valueCartSubtotal = parseInt(cartSubtotal.replace(/[^\d]/g, ''), 10);
    console.log(numericValueCartSubtotal); 
    let valuePromo = valueCartSubtotal*(15/100);
    let total = valueCartSubtotal-valuePromo;
    let stringTotal = "Rp " + total.toLocaleString().replace(',', '.');
    expect(CartPage.cartTotalAmount).toHaveText(stringTotal);
})

When(/^User click product image in cart$/, async() => {
    // await CartPage.clickImgAdvanceSetProduct();
    await CartPage.clickcartImgProduct();
})

Then(/^User should redirected to PDP (.+)$/, async(prodName) => {
    await expect(PdpPage.pdpBreadcrumbs).toBeDisplayed();
    await expect(PdpPage.pdpBreadcrumbs).toHaveText(prodName);
})

When(/^User click on product name in cart$/, async() => {
    await CartPage.clickcartProductName();
})

Then(/^Catalog rule tag product (.+) should (.+)$/, async(productName,catalogTag) => {
    catalogProduct = productName;
    catalogTag = catalogTag;
    await expect(CartPage.catalogPromoTag).toBeDisplayed();
    await expect(CartPage.catalogPromoTag).toHaveText(catalogTag);
})

Then(/^Catalog rule price product (.+) should correct$/, async(productName) => {
    catalogProduct = productName;
    await expect(CartPage.cartOriginalPrice).toBeDisplayed();
    originalPrice = await CartPage.cartOriginalPrice.getText();
    numericValueOriginalPrice = parseInt(originalPrice.replace(/[^\d]/g, ''), 10);
    numericOriginalPrice = numericValueOriginalPrice;
    console.log(numericOriginalPrice);
    catalogPrice = numericOriginalPrice-20000;
    console.log(catalogPrice);
    stringCatalogPrice = "Rp " + catalogPrice.toLocaleString();
    stringCatalogPrice = stringCatalogPrice.replace(',', '.');
    expect(CartPage.cartCatalogPrice).toHaveText(stringCatalogPrice);
})