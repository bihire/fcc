<template>
  <div class="box">
    <div class="slide active">
      <div class="card">
        <div class="card-img" id="img01"></div>
        <div class="card-content">
          <p class="card-theme">Travel</p>
          <h2 class="card-header">Amongst the giants</h2>
          <p
            class="card-para"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus vel neque iure aut, eligendi aliquid vero facilis, quia repellat.</p>
          <a class="card-link">Read</a>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="card">
        <div class="card-img" id="img02"></div>
        <div class="card-content">
          <p class="card-theme">Travel</p>
          <h2 class="card-header">Home Outdoors</h2>
          <p
            class="card-para"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus vel neque iure aut, eligendi aliquid vero facilis, quia repellat.</p>
          <a class="card-link">Read</a>
        </div>
      </div>
    </div>
    <div class="slide">
      <div class="card">
        <div class="card-img" id="img03"></div>
        <div class="card-content">
          <p class="card-theme">Travel</p>
          <h2 class="card-header">A Mystic Walk</h2>
          <p
            class="card-para"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti repellendus vel neque iure aut, eligendi aliquid vero facilis, quia repellat.</p>
          <a class="card-link">Read</a>
        </div>
      </div>
    </div>
    <div class="prevnext">
      <button class="pn-btn" id="prev"></button>
      <button class="pn-btn" id="next"></button>
    </div>
    <!-- <v-flex xs6></v-flex>
      <v-flex xs6 class="photo">
        <div class="bro mt-2">
          <div class="login mr-2 mb-0">
            <div class="mt-2">
              <div class="white elevation-2">
                <v-toolbar flat dense>
                  <v-toolbar-title>Login</v-toolbar-title>
                </v-toolbar>
                <div class="pl-4 pr-4">
                  <v-flex>
                    <v-text-field label="Email" v-model="email"></v-text-field>
                  </v-flex>
                  <br>
                  <v-flex>
                    <v-text-field label="Password" v-model="password" type="password"></v-text-field>
                  </v-flex>
                  <br>
                  <div class="error" v-html="error"></div>
                  <br>
                  <div>
                    <p>forget password</p>
                    <v-btn small left round @click="login">Login</v-btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </v-flex>-->
  </div>
</template>
<script>
import AuthanticationService from "@/services/Authanticationservice";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthanticationService.login({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  },
  created() {
    var $activeSlide = $(".active"),
      $homeSlide = $(".slide"),
      $slideNavPrev = $("#prev"),
      $slideNavNext = $("#next");

    function init() {
      TweenMax.set($homeSlide.not($activeSlide), { autoAlpha: 0 });
      TweenMax.set($slideNavPrev, { autoAlpha: 0.2 });
    }

    init();

    function goToNextSlide(slideOut, slideIn, slideInAll) {
      var t1 = new TimelineLite(),
        slideOutContent = slideOut.find(".card-content"),
        slideInContent = slideIn.find(".card-content"),
        slideOutImg = slideOut.find(".card-img"),
        slideInImg = slideIn.find(".card-img"),
        index = slideIn.index(),
        size = $homeSlide.length;
      console.log(index);

      if (slideIn.length !== 0) {
        t1.set(slideIn, { autoAlpha: 1, className: "+=active" })
          .set(slideOut, { className: "-=active" })
          .to(slideOutContent, 0.65, { y: "+=40px", ease: Power3.easeInOut }, 0)
          .to(
            slideOutImg,
            0.65,
            { backgroundPosition: "bottom", ease: Power3.easeInOut },
            0
          )
          .to(slideInAll, 1, { y: "-=100%", ease: Power3.easeInOut }, 0)
          .fromTo(
            slideInContent,
            0.65,
            { y: "-=40px" },
            { y: 0, ease: Power3.easeInOut },
            "-=0.7"
          )
          .fromTo(
            slideInImg,
            0.65,
            { backgroundPosition: "top" },
            { backgroundPosition: "bottom", ease: Power3.easeInOut },
            "-=0.7"
          );
      }

      TweenMax.set($slideNavPrev, { autoAlpha: 1 });

      if (index === size - 1) {
        TweenMax.to($slideNavNext, 0.3, {
          autoAlpha: 0.2,
          ease: Linear.easeNone
        });
      }
    }

    $slideNavNext.click(function(e) {
      e.preventDefault();

      var slideOut = $(".slide.active"),
        slideIn = $(".slide.active").next(".slide"),
        slideInAll = $(".slide");

      goToNextSlide(slideOut, slideIn, slideInAll);
    });

    function goToPrevSlide(slideOut, slideIn, slideInAll) {
      var t1 = new TimelineLite(),
        slideOutContent = slideOut.find(".card-content"),
        slideInContent = slideIn.find(".card-content"),
        slideOutImg = slideOut.find(".card-img"),
        slideInImg = slideIn.find(".card-img"),
        index = slideIn.index(),
        size = $homeSlide.length;

      if (slideIn.length !== 0) {
        t1.set(slideIn, { autoAlpha: 1, className: "+=active" })
          .set(slideOut, { className: "-=active" })
          .to(slideOutContent, 0.65, { y: "-=40px", ease: Power3.easeInOut }, 0)
          .to(
            slideOutImg,
            0.65,
            { backgroundPosition: "top", ease: Power3.easeInOut },
            0
          )
          .to(slideInAll, 1, { y: "+=100%", ease: Power3.easeInOut }, 0)
          .fromTo(
            slideInContent,
            0.65,
            { y: "+=40px" },
            { y: 0, ease: Power3.easeInOut },
            "-=0.7"
          )
          .fromTo(
            slideInImg,
            0.65,
            { backgroundPosition: "bottom" },
            { backgroundPosition: "top", ease: Power3.easeInOut },
            "-=0.7"
          );
      }

      TweenMax.set($slideNavPrev, { autoAlpha: 1 });

      if (index === 0) {
        TweenMax.to($slideNavPrev, 0.3, {
          autoAlpha: 0.2,
          ease: Linear.easeNone
        });
      }
    }

    $slideNavPrev.click(function(e) {
      e.preventDefault();

      var slideOut = $(".slide.active"),
        slideIn = $(".slide.active").prev(".slide"),
        slideInAll = $(".slide");

      goToPrevSlide(slideOut, slideIn, slideInAll);
    });
  }
};
</script>
<style scoped>
.photo {
  color: red;
  height: 480px;
  background-image: url("http://placekitten.com/400/400");
  -webkit-filter: blur(10px);
  -moz-filter: blur(10px);
  -o-filter: blur(10px);
  -ms-filter: blur(10px);
  filter: blur(10px);
  filter: blur(10px);
}
.bro {
  width: 100%;
  padding: 0;
  overflow: auto;
  height: 100vh;
  z-index: -1;
}
.tracking {
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  line-height: 2rem;
  text-align: left;
}
.track {
  overflow: auto;
}
div.tracking label {
  font-family: Source Sans Pro;
  font-weight: lighter;
  color: #fff;
  font-size: 18px;
}
.trackbtn {
  float: right;
}
textarea {
  width: 150px;
  height: 40px;
  background: white;
}
.login {
  position: relative;
  width: 240px;
  float: right;
  margin-bottom: 0;
}

/* css properties */

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.box {
  height: 460px;
  font-family: "Poppins";
  overflow: hidden;
}

.slide {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.card {
  width: 100%;
  height: 100vh;
  display: flex;
  background: #fff;
}

.card-img {
  background-position: center;
  width: 50%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

/* #img01 {
  background-image: url("https://images.unsplash.com/photo-1505324453012-a12195b84346?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80");
}

#img02 {
  background-image: url(" https://images.unsplash.com/photo-1517223674523-595bea3551ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1402&q=80");
}

#img03 {
  background-image: url(" https://images.unsplash.com/photo-1485880776513-a4058931414e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80");
} */

.card-content {
  padding: 10% 5%;
  box-sizing: border-box;
  width: 50%;
  background: #0a0a0a;
}

.card-theme {
  font-weight: 900;
  font-size: 1.7vmin;
  text-transform: uppercase;
  font-family: Poppins;
  letter-spacing: 10px;
  color: grey;
}

.card-header {
  font-weight: 700;
  font-size: 54px;
  text-transform: capitalize;
  line-height: 1;
  margin: 3vmin 0 3.5vmin;
  color: #fff;
  font-family: Poppins;
}

.card-para {
  font-size: 1.6vmin;
  line-height: 1.8;
  font-weight: 300;
  margin-bottom: 2.5vmin;
  color: #fff;
  font-family: Poppins;
}

.card-link {
  color: #fff;
  font-family: Poppins;
  font-size: 1.8vmin;
  display: block;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.card-link:after {
  content: "→";
}

.prevnext {
  position: absolute;
  width: 4vmin;
  height: 8vmin;
  right: 2%;
  bottom: 0;
  top: 80%;
  color: #fff;
  margin: auto 0;
}

.pn-btn {
  color: #fff;
  width: 100%;
  height: 50%;
  border: 0;
  background-color: transparent;
  font-size: 20px;
}

#prev,
#next {
  position: relative;
  cursor: pointer;
}

#prev:focus,
#next:focus {
  outline: none;
}

#prev:hover:after,
#next:hover:after {
  opacity: 1;
}

#prev:after,
#next:after {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  opacity: 0.6;
  transition: opacity 0.3s ease;
}

#prev:after {
  content: "↑";
}

#next:after {
  content: "↓";
}
</style>
