console.log('読み込んだ！');
(function () {
    'use strict';

    Vue.component('lesson-component',{
        template:
        '<section class="lesson"><div class="lesson_inner contents-inner"><div class="lesson_sub-title"></div><h2 class="lesson_title">{{ title }}</h2><p class="lesson_detail">{{ comment }}</p><figure class="lesson_img-wrap" :style="bgImage"></figure><div class="button_wrap"><a class="button_base" :href="slug">ページを見る</a></div></div></section>',
        data: function(){
            return{
                bgImage: 'background-image: url(img/lesson_image.jpg)'
            }
        },
        props: ['comment','slug','title']
    })

    var myComponent = {
        template: '<p>MyComponent!!!</p>'
    }

    var vm = new Vue({
        el: '#app',
        components: {
            'my-component': myComponent,
        },
        data: {
            message: ''
        }
    });
})();