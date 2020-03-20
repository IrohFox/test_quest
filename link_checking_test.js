Feature('link_checking');

Scenario('Софт для бысторого создания скриншотов', (I) => {
    I.amOnPage('http://blog.csssr.ru/qa-engineer');
    I.waitForText ('НАХОДИТЬ НЕСОВЕРШЕНСТВА');
    I.click('НАХОДИТЬ НЕСОВЕРШЕНСТВА');
    I.click('Софт для быстрого создания скриншотов');
    I.waitForVisible('Monosnap');
});
