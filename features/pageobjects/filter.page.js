const { $ } = require('@wdio/globals')
const Page = require('./page');
const { browser } = require('@wdio/globals')


class FilterPage extends Page{

      get txtfilter(){
            return $("//div[@id='variant']");
        }

        get clickcmbfilter(){
        return $("(//div[@class='MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary MuiInputBase-fullWidth mui-style-29nciu'])[1]");
        }

       get cmbdescbyname(){
       //return $("//div[@id='variant']");
          return $("(//li[normalize-space()='Name: Z - A'])[1]");
        //return $("//li[text()='Name: Z - A']");
               }

    get descbyname(){
       return $("//div[@id='variant']");
}

       get firstskudesc(){
       return $("(//span[normalize-space()='Second Skin Tint Medium 1w 30ml'])[1]");
       }

       get ascbyprice(){
                 return $("(//li[text()='Price: Lowest - Highest'])[1]");
}


      get firstskuascbyprice(){
                 return $("//span[normalize-space()='Moringa Shower Gel 60ml']");
}

     get descbyprice(){
                 return $("(//li[text()='Price: Highest - Lowest'])[1]");
}

 get firstskudescbyprice(){
                 return $("(//span[normalize-space()='Hampers Medium Moringa'])[1]");
}


get firstskubyasc(){
    return $("//div[@id='variant']/parent::div/parent::div/parent::div/parent::div/following-sibling::div/div[1]/div/div[1]/a/div/div[2]");
}
//"

//--------------pemisah asynch--------------

async clickcmb(){
             await this.clickcmbfilter.click();
         }

async clickfilter(){
             await this.txtfilter.click();
         }


async clickfilterbynamedesc(){
             await this.cmbdescbyname.click();
         }

async clickfilterbypriceasc(){
             await this.ascbyprice.click();
         }


      async clickfilterbypricedesc(){
                   await this.descbyprice.click();
               }





}
module.exports = new FilterPage();