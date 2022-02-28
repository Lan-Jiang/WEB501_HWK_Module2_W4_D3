
Vue.component('component_header', {
    template: '<div><span>Food Blog</span></div>'
}); // Global

var vm1 = new Vue({
    el: '#component1'
})

// Vue.component('main_h2', {
//     template: '<div><h2>Comments</h2></div>'
// });

var vm2 = new Vue({
    el: '#component2',
    components: {
        'main_h2': {
            template: '<div><h2>Comments</h2></div>' 
        }
    }
}) // Local components

var vm3 = new Vue({
    el: '#photos',
    components: {
        'main_photos': {
            template: '<img src="images/chili.jpg" alt="White Chicken Chili" width="180px">' 
        }
    }
}) // Local components

var vm4 = new Vue({
    el: '#navbar',
    components: {
        'navbar_code': {
            template: `<div class="navbar-main">
            <nav class="navbar navbar-expand-lg navbar-light bg-white">
              <div class="container-fluid">
  
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
  
                <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                  <div class="main-menu">
                    <ul class="navbar-nav">
                      <li class="nav-item active">
                        <a href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                        <a href="cliffs.html">Recipes</a>
                      </li>
                      <li class="nav-item">
                        <a href="activities.html">Lifestyles</a>
                      </li>
                      <li class="nav-item">
                        <a href="contact.html">Videos</a>
                      </li>
                      <li class="nav-item">
                      <a href="contact.html">About</a>
                    </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>`
        }
    }
}) // Local components

var app = new Vue({
    el: '#post1',
    data: {
        author: 'Brianna',
        date: 'February 13, 2021 @ 12:58 pm ',
        reply: 'REPLY',
        p: 'Was amazing! My Walmart didn’t have coriander in stock and didn’t have ground cumin. I used serrano instead of jalapeño. It was just like my favorite tortilla soup from BJs. I am sending this recipe to my family. I want everyone to try it!',
        hreflink_brianna: 'profile.png',
        Bioauthor: 'Brianna',
        Foodielevel: 'Novice',
        Bio: 'Food enthusiast. Love to cook and experiment. Into only organic, fat free, sugar free stuffs!',
        isHidden: false
    },
    methods: {
        hidediv: function() {
            this.isHidden = !this.isHidden;
        }
    },
});

var app = new Vue({
    el: '#post2',
    data: {
        author: 'LINH',
        date: 'February 15, 2021 @ 9:46 am ',
        reply: 'REPLY',
        p: 'I just made this soup today and it’s so tasty! didn’t have corn at home but still turned out very good.  It’s a winner!  I made beef chili for my parents; but since my dad has gout he can’t eat beef; this white chicken chili is perfect for him.  Thank you Lisa!',
        hreflink_linh: 'profile.png',
        Bioauthor: 'LINH',
        Foodielevel: 'Newcomer',
        Bio: 'Love food! Grew up with meat and potatoes. Recently venture outside my comfort zone. Loving everything I have been eating so far. Thai is my favorite at this time.',
        isHidden: false
    },
    methods: {
        hidediv: function() {
            this.isHidden = !this.isHidden;
        }
    },
});

var app = new Vue({
    el: '#post3',
    data: {
        author: 'CATHERINE LEONARDO',
        date: 'February 13, 2021 @ 12:58 pm ',
        reply: 'REPLY',
        p: 'I LOVE this White Chicken Chili! You are right, it is satiating meal—delicious with toasted bread. Refreshingly different taste than any chicken chili I’ve made in the past. I made it exactly as written and added some chopped zucchini, carrots, and celery. Instead of shredding the chicken, I chopped it into small pieces. It freezes very well. Will be an all-time favorite, for sure.',
        hreflink_cath: 'profile.png',
        Bioauthor: 'CATHERINE LEONARDO',
        Foodielevel: 'Mentor',
        Bio: 'I have to say I never was the adventurous type until 2 years ago. My boyfriend, who is of Japanese background, exposed me to other cultural food and I have never look back since!',
        isHidden: false
    },
    methods: {
        hidediv: function() {
            this.isHidden = !this.isHidden;
        }
    },
});

var app = new Vue({
    el: '#post4',
    data: {
        author: 'KALI',
        date: 'February 13, 2021 @ 11:31 am ',
        reply: 'REPLY',
        p: 'This recipe is dynamite! My partner usually won’t eat beans but he finished the whole pot (darn was hoping to have some for leftovers haha). This is crowd-pleaser that I am going to add to my regular recipe rotation. Thanks so much, Lisa!',
        hreflink_kali: 'profile.png',
        Bioauthor: 'KALI',
        Foodielevel: 'Novice',
        Bio: 'Food is my passion. So is cooking. I love to experiment and try new things. I have to admit I’m a food whore! Invite me over for dinner and I’ll be there!',
        isHidden: false
    },
    methods: {
        hidediv: function() {
            this.isHidden = !this.isHidden;
        }
    },
});


