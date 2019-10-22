console.log('読み込んだ！');
(function () {
    'use strict';

    Vue.component('lesson-component',{
        template:
        '<section class="lesson">\
            <div class="lesson_inner contents-inner">\
                <div class="lesson_sub-title"></div>\
                <h2 class="lesson_title">{{ title }}</h2>\
                <p class="lesson_detail">{{ comment }}</p>\
                <figure class="lesson_img-wrap" :style="bgImage"></figure>\
                <div class="button_wrap">\
                    <a class="button_base" :href="url" @click="clickLink">ページを見る</a>\
                </div>\
            </div>\
        </section>',
        data: function(){
            return{
                bgImage: 'background-image: url(img/'+ this.img +'.jpg)',
                url: this.slug + '.html'
            }
        },
        methods: {
            clickLink: function(){
                console.log('click');
                return false;
            }
        },
        props: ['comment','slug','title','img']
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
            list: [
                {
                    'title': 'Contact Form1',
                    'comment': 'UIの基礎となるお問い合わせフォームをつくりました。',
                    'img': 'lesson_image',
                    'slug': 'contact-form',
                },
                {
                    'title': 'Contact Form2',
                    'comment': 'UIの基礎となるお問い合わせフォームをつくりました。',
                    'img': 'contact-form',
                    'slug': 'contact-form',
                },
                {
                    'title': 'Contact Form3',
                    'comment': 'UIの基礎となるお問い合わせフォームをつくりました。',
                    'slug': 'contact-form',
                }
            ]
        }
    });
})();