Feature('link_checking');

const IDS = require('./identifiers'); 

Scenario('Проверка работы ссылки "Софт для быстрого создания скриншота"', (I) => {
    I.amOnPage('http://blog.csssr.ru/qa-engineer');
    I.waitForText ('НАХОДИТЬ НЕСОВЕРШЕНСТВА');
    
    I.click(IDS.graphs.errors);
    I.click('Софт для быстрого создания скриншотов');
    
    I.wait(2);
    I.see('Monosnap');

});
