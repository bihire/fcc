<template>
  <div>
    <transition name="fade">
      <v-toolbar flat clipped-right style="min-height:50px;" color="white">
        <v-container fluid align-center fill-height>
          <v-toolbar-side-icon class="hidden-sm-and-up"></v-toolbar-side-icon>
          <div class="logo">
            <img src="https://img-msg.tb-list.com/g-loves/1347/1507922592.png" alt>
          </div>
          <v-spacer></v-spacer>
          <v-toolbar-items class="items hidden-sm-and-down">
            <ul class="navigation-list">
              <li>Blog</li>
              <li>Sign In</li>
            </ul>
            <input type="button" id="signUp" href="#" value="Sign Up">
          </v-toolbar-items>
        </v-container>
      </v-toolbar>
    </transition>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: white;
}
.toolbar-container {
  margin-left: 4.1vw;
  margin-right: 4.1vw;
}
.logo {
  height: 50px;
  width: 50px;
  margin-left: 5vh;
}

.logo img {
  height: 100%;
  width: 100%;
}

#signUp {
  width: 13vw;
  max-width: 142px;
  min-width: 62px;
  height: 40px;
  border-radius: 3px;
  background-image: linear-gradient(106deg, rgba(255, 255, 255, 0), #74d8c7 99%),
    linear-gradient(#00b8a6, #00b8a6);
  box-shadow: 0 0 2px 0 rgba(79, 78, 80, 0.23);
}

#join-now-btn {
  width: 13vw;
  min-width: 62px;
  height: 40px;
  border-radius: 3px;
  background-image: linear-gradient(106deg, rgba(255, 255, 255, 0), #74d8c7 99%),
    linear-gradient(#00b8a6, #00b8a6);
  box-shadow: 0 0 2px 0 rgba(79, 78, 80, 0.23);
}

.items {
  align-items: center;
  align-content: center;
  margin-right: 5vh;
}

.items [type="button"] {
  font-family: MuseoSans;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
}

.navigation-list {
  list-style: none;
  margin-right: 5vh;
  margin-left: 2vh;
}

.navigation-list li {
  font-family: MuseoSans;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #00b8a6;
  display: inline;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: border-bottom 1s ease-in-out;
  text-decoration: none;
}

.navigation-list li:hover {
  border-bottom: 2px solid #00b8a6;
}

.navigation-list li:nth-child(1) {
  margin-right: 6vh;
}

.intro-section {
  height: 15vh;
}

.top-toolbar {
  min-height: 60px;
}

.toolbar__content {
  min-height: 60px !important;
}

.top-section {
  background-size: cover;
  background-position: top right;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}

.main-title {
  font-family: MuseoSans-700;
  font-size: 36px;
  font-weight: 900 !important;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #4f4e50;
  text-align: center;
}

.subtitle {
  font-family: MuseoSans-700;
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  text-align: center;
  color: #4f4e50;
}
.perks-flex {
  margin-top: 10vh !important;
}

.perks-grid-list {
  margin: 0 auto !important;
}

@keyframes animatePerk {
  0% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(-5px);
  }
}
.perks-flex:hover .perks-image-row img {
  /*transform: translateY(-5px);*/
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-delay: 0.3s;
}

.perks-image {
  height: 30px;
  width: 30px;
}

.perks-flex:hover {
}

.perks-image-row img {
  /*transition: transform 0.25s ease-in-out;*/
  animation-name: animatePerk;
}

.perks-main-title {
  font-family: MuseSans;
  font-size: 28px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #00b8a6;
}

.perks-main-subtitle {
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #00b8a6;
}

.perk-title {
  font-family: MuseoSans;
  font-size: 18px;
  font-weight: 900;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4f4e50;
}

.perk-subtitle {
  font-family: MuseoSans;
  font-size: 16px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #4f4e50;
}

/*CALL TO ACTION*/
.cta {
  background-color: #00b8a6 !important;
  height: 100vh;
  background: url("/static/ctas/cta_landing_page.png");
  background-size: 80%;
  background-position-y: 100%;
  background-repeat: no-repeat;
}

/*MEDIA QUERIES*/
@media screen and (max-width: 420px) {
  .main-title {
    font-size: 20px !important;
    transition: font-size 0.5s ease-in-out;
  }

  .main-subtitle {
    font-size: 14px !important;
    transition: font-size 0.5s ease-in-out;
  }

  #join-now-btn {
    width: 40vw !important;
    margin-top: 25vh !important;
    transition: all 0.5s ease-in-out;
  }

  .perks-main-title {
    font-size: 24px !important;
    transition: font-size 0.5s ease-in-out;
  }

  .perks-main-subtitle {
    font-size: 16px !important;
    transition: font-size 0.5s ease-in-out;
  }
}
@media screen and (min-width: 1264px) {
  .perks-flex {
    flex-basis: 25.33333333333333% !important;
    max-width: 25.33333333333333% !important;
    transition: all 0.5s ease-in-out;
  }

  .perk-title {
    font-size: 30px;
    transition: font-size 0.5s ease-in-out;
  }

  .perk-subtitle {
    font-size: 20px;
    transition: font-size 0.5s ease-in-out;
  }

  .perks-main-title {
    font-size: 40px;
    transition: font-size 0.5s ease-in-out;
  }

  .perks-main-subtitle {
    font-size: 30px;
    transition: font-size 0.5s ease-in-out;
  }
}

* {
  padding: 0px;
  margin: 0px;
}
.grid-list-footer {
  padding: 20px;
  padding-left: 5% !important;
  padding-right: 5% !important;
}
a {
  text-decoration: none;
  font-size: 14px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #00b8a6;
}

.link-row:nth-last-child() {
  text-align: right;
}

.links-row1:nth-last-child() {
  text-align: end;
}
.fade-enter-active,
.fade-leave-active {
  transition: top 0.8s ease-out;
}
.fade-enter,
.fade-leave-to {
  transition: top 0.8s;
}
</style>
