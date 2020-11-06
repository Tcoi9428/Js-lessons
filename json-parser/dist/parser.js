let items = [];
let catalogItem = document.querySelectorAll('.js-catalog-item');
    catalogItem.forEach(function (item){
            let itemId = item.getAttribute('data-id');
            let itemName = item.getAttribute('data-name');
            let itemType = item.getAttribute('data-type');
            let itemLink = item.querySelector('a').getAttribute('href');
            let itemImage = item.querySelector('img').getAttribute('src');
            let itemThumbnail = item.querySelector('img').getAttribute('src');
                site = {
                    id   : itemId,
                    name : itemName,
                    type : itemType,
                    link : itemLink,
                    thumbnail : itemThumbnail,
                    image : itemImage,
                }
        items.push(site);
        }
    )
json = JSON.stringify(items);
var newWin = window.open("about:blank");
    newWin.document.write(json);

