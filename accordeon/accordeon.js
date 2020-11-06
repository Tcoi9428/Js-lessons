let titleList = document.querySelectorAll('.accord-wrapper .accord-item .item-title');

titleList.forEach(function(item) {
    item.addEventListener('click', function(e) {
        let element = e.target;
        let contentTarget = element.nextElementSibling;

            contentTarget.classList.toggle('active');
    });
});
