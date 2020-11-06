document.addEventListener('DOMContentLoaded', function (){
    let tabTitlesList = document.querySelectorAll('.tabs-titles .item-title');
    let tabBody = document.querySelectorAll('.tab-body .item-content');

    tabTitlesList.forEach(function (item){
        item.addEventListener('click', function(){
            let titleIndex = item.getAttribute('data-index');
            tabBody.forEach(function (item){
                let bodyIndex =  item.getAttribute('data-index');
                if (titleIndex == bodyIndex){
                        item.classList.toggle('active');
                }
                else{
                    item.classList.remove('active');
                }
            });

        });
    });
});
